import { gts } from '../utils/gt-sports.js'

export default (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.json(gts.stats())
}
