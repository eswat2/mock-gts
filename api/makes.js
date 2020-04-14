const { gts } = require('../utils/gt-sports')

module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.json(gts.allMakes())
}
