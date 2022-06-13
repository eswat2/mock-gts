import { dataSet, gtSports } from '../utils/mocks.js'

export default (req, res) => {
  const { id } = req.query
  const data = dataSet(gtSports, id)
  // NOTE:  we are returning the id & solution in the response...
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.json(data)
}
