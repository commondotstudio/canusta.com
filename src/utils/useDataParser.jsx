// import { useHomePageQuery } from "../hooks/useHomePageQuery"

export const useDataParser = data => {
  // const dataPinnedEvents = useHomePageQuery()["wpPage"]["home"]["pinToTop"]
  const date = new Date()
  date.setHours(0, 0, 0, 0)
  const now = date.getTime()

  let dataPermanent = []
  let dataNow = []
  let dataFuture = []
  let dataPast = []

  let currentPinNumber = 0

  const parseItem = item => {
    const dateOpening = item.acf.date_opening ? item.acf.date_opening : null
    const dateClosing = item.acf.date_closing ? item.acf.date_closing : null

    const dateOpeningDate = new Date(dateOpening).getTime()
    const dateClosingDate = new Date(dateClosing).getTime()
    const isOpeningPast = dateOpeningDate <= now ? true : false
    const isClosingPast = dateClosingDate <= now ? true : false
    const isSingleDayEvent = dateClosing ? false : true

    let timeCategory

    if (isSingleDayEvent && isOpeningPast) {
      timeCategory = "past"
    }

    if (!isSingleDayEvent && isOpeningPast && isClosingPast) {
      timeCategory = "past"
    }

    if (isSingleDayEvent && dateOpeningDate === now) {
      timeCategory = "now"
    }

    if (!isSingleDayEvent && isOpeningPast && !isClosingPast) {
      timeCategory = "now"
    }

    if (isOpeningPast === false) {
      timeCategory = "future"
    }

    if (dateOpening == null && dateClosing == null) {
      timeCategory = "permanent"
    }

    switch (timeCategory) {
      case "permanent":
        dataPermanent.push(item)
        break
      case "now":
        dataNow.push(item)
        break
      case "past":
        dataPast.push(item)
        break
      case "future":
        dataFuture.push(item)
        break
      default:
        console.error("no timeCategory")
        break
    }
  }

  data?.forEach(item => {
    item.acf.dateOpeningInDateFormat = item.acf.date_opening
      ? new Date(item.acf.date_opening).getTime()
      : 0
    item.acf.dateClosingInDateFormat = item.acf.date_closing
      ? new Date(item.acf.date_closing).getTime()
      : 0
    parseItem(item)
  })

  const sortData = data => {
    let dataSorted = data.slice(0)
    dataSorted.sort(function (a, b) {
      const dateA = a.acf.dateClosingInDateFormat
        ? a.acf.dateClosingInDateFormat
        : a.acf.dateOpeningInDateFormat
      const dateB = b.acf.dateClosingInDateFormat
        ? b.acf.dateClosingInDateFormat
        : b.acf.dateOpeningInDateFormat
      return dateA - dateB
    })
    return dataSorted
  }

  const movePinnedItemsToTop = list => {
    currentPinNumber = 0
    loopPinnedEvents(list)
    return list
  }

  const loopPinnedEvents = list => {
    // const numberOfPinnedEvents = dataPinnedEvents.length
    const numberOfPinnedEvents = 0
    for (
      let currentPinPosition = 0;
      currentPinPosition < numberOfPinnedEvents;
      currentPinPosition++
    ) {
      checkIfPinnedEventIsInData(list, currentPinNumber)
      currentPinNumber++
    }
    return list
  }

  const checkIfPinnedEventIsInData = (list, currentPinPosition) => {
    const currentPinnedEventId =
      dataPinnedEvents[currentPinPosition].event.databaseId
    list.forEach(element => {
      const elementId = element.databaseId
      if (currentPinnedEventId == elementId) {
        moveItemToPosition(list, elementId, currentPinPosition)
      }
    })
    return list
  }

  const moveItemToPosition = (list, elementId, currentPinPosition) => {
    const itemToMove = list.find(item => item.databaseId === elementId)
    list.splice(list.indexOf(itemToMove), 1)
    list.splice(currentPinPosition, 0, itemToMove)
    return list
  }

  dataPast = sortData(dataPast)
  dataPast.reverse()

  dataNow = sortData(dataNow)
  dataFuture = sortData(dataFuture)

  dataNow = movePinnedItemsToTop(dataNow)

  dataPermanent.forEach(item => {
    dataNow.push(item)
  })

  return { dataNow, dataFuture, dataPast }
}
