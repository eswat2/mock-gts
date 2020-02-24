const { colors, randomArray } = require('../utils/mocks')

module.exports = (req, res) => {
  const { count } = req.query
  const num = count ? parseInt(count) : 1
  const max = colors.length - 1
  const indx = randomArray(num, max)

  res.json(indx.map(i => colors[i]))
}
