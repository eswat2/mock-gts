const { dataSet, gtSports } = require('../utils/mocks')

module.exports = (req, res) => {
  const { stamp } = req.query
  const data = dataSet(gtSports, stamp)
  // NOTE:  we are returning the id & solution in the response...
  res.json(data)
}
