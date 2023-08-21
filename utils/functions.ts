export function isDev() {
   return process.env.NODE_ENV === 'development'
}

export const closeScrolling = () => {
   return document.body.classList.add('overflow-hidden')
}

export const openScrolling = () => {
   return document.body.classList.remove('overflow-hidden')
}
