import { gtExotics } from '../utils/mocks.js'

export default (req, res) => {
  const { group } = req.query

  res.setHeader('Access-Control-Allow-Origin', '*')
  res.json(gtExotics.exotics(group))
}
