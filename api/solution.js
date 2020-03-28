const { dataSet, gtSports } = require('../utils/mocks')

module.exports = (req, res) => {
  const data = dataSet(gtSports)
  // NOTE:  we are returning the id & solution in the response...
  res.json(data)
}
