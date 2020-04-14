const { dataSet, gtSports } = require('../utils/mocks')

module.exports = (req, res) => {
  const { id } = req.query
  const data = dataSet(gtSports, id)
  // NOTE:  we are returning the id & solution in the response...
  res.json(data)
}
