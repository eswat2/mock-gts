module.exports = (req, res) => {
  res.json({
    message: 'hooray! welcome to our api server!...',
    apis: ['cars', 'colors', 'exotics', 'groups', 'makes', 'solution'],
  })
}
