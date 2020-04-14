const { gtExotics } = require('../utils/mocks')

module.exports = (req, res) => {
  const { group } = req.query

  res.setHeader('Access-Control-Allow-Origin', '*')
  res.json(gtExotics.exotics(group))
}
