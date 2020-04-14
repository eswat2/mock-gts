const { gtCars } = require('../utils/mocks')

module.exports = (req, res) => {
  const { group } = req.query

  res.setHeader('Access-Control-Allow-Origin', '*')
  res.json(gtCars.nClass(group))
}
