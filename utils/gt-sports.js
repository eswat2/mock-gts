const { data } = require('./gts-data')

const total = data.length

const exotics = (data) => {
  return data.filter((item) => {
    return item.group.includes('Gr')
  })
}

const nonExotics = (data) => {
  return data.filter((item) => {
    return !item.group.includes('Gr')
  })
}

const groups = (data) => {
  return data.reduce((list, item) => {
    return list.includes(item.group) ? list : [...list, item.group]
  }, [])
}

const makes = (data) => {
  return data.reduce((list, item) => {
    return list.includes(item.make) ? list : [...list, item.make]
  }, [])
}

const ids = (data) => {
  return data.map((item) => item.vin)
}

const allGroups = () => {
  return groups(data).sort()
}

const allMakes = () => {
  return makes(data).sort()
}

const filters = { nonExotics, exotics, makes, groups, ids }
const gts = { data, total, allGroups, allMakes }

module.exports = {
  filters,
  gts,
}
