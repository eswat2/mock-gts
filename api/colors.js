const { chance, colors } = require('../utils/mocks')

module.exports = (req, res) => {
  const { count } = req.query
  const num = count ? parseInt(count) : 1
  const pick = num > colors.length ? colors.length : num

  res.setHeader('x-count', num)
  res.setHeader('x-pick', pick)
  res.json(chance.pickset(colors, pick))
}
