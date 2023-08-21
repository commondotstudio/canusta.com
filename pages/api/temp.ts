import { NextApiRequest, NextApiResponse } from 'next'
import { createRouter } from 'next-connect'

// import yup from '@/utils/lib/yup'

const router = createRouter<NextApiRequest, NextApiResponse>()

router.post(async (req: NextApiRequest, res: NextApiResponse) => {
   try {
      // await companySchema.validate(req.body, {
      //   stripUnknown: false,
      // })
      //  const newCompanyData = req.body
      //  await dbConnect()

      //  await new Company(newCompanyData).save()
      return res.status(200).send({ message: 'All done' })
   } catch (error) {
      //  const err = error as yup.ValidationError

      //  if (err.message) {
      //    return res.status(400).send({ message: err })
      //  }
      return res.status(400).send({ message: error })
   }
})

router.get(async (req: NextApiRequest, res: NextApiResponse) => {
   try {
      //  await dbConnect()
      //  const companies = await Company.find({})
      return res.status(200).send({ message: 'All done' })
   } catch (error) {
      return res.status(400).send({ message: error })
   }
})

export default router.handler({
   onError: (err, req, res) => {
      // @ts-ignore
      console.error(err.stack)
      res.status(500).end('Something broke!')
   },
   onNoMatch: (req, res) => {
      res.status(404).end('Page is not found')
   },
})
