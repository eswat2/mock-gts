import Chance from 'chance'
import vinGenerator from 'vin-generator'
import shortid from 'shortid'
import { filters, gts } from './gt-sports.js'

const chance = new Chance()

const colors = [
  'red',
  'green',
  'blue',
  'yellow',
  'purple',
  'mint green',
  'teal',
  'white',
  'black',
  'orange',
  'pink',
  'grey',
  'maroon',
  'violet',
  'turquoise',
  'tan',
  'sky blue',
  'salmon',
  'plum',
  'orchid',
  'olive',
  'magenta',
  'lime',
  'ivory',
  'indigo',
  'gold',
  'fuchsia',
  'cyan',
  'azure',
  'lavender',
  'silver',
]

const dealerSuffix = [
  'Autos',
  'Cars',
  'Deals',
  'Group',
  'LLC',
  'Lot',
  'Motors',
  'Rides',
  'Sales',
  'Transit',
  'Venture',
]

const gtSports = {
  cars: gts.data,
  count: gts.total,
  makes: gts.allMakes(),
  groups: gts.allGroups(),
}

const exotics = filters.exotics(gts.data)
const gtExotics = {
  cars: exotics,
  count: exotics.length,
  makes: filters.makes(exotics).sort(),
  groups: filters.groups(exotics).sort(),
  exotics: (group) => {
    return group ? exotics.filter((car) => car.group.includes(group)) : exotics
  },
}

const nClass = filters.nonExotics(gts.data)
const gtCars = {
  cars: nClass,
  count: nClass.length,
  makes: filters.makes(nClass).sort(),
  groups: filters.groups(nClass).sort(),
  nClass: (group) => {
    return group ? nClass.filter((car) => car.group.includes(group)) : nClass
  },
}

const generateDealers = (data) => {
  const numDealers = chance.integer({ min: 3, max: 7 })
  const dealerIds = chance.unique(chance.ssn, numDealers, {
    dashes: false,
  })

  const dealers = dealerIds.reduce((bucket, id) => {
    const numVins = chance.integer({ min: 3, max: 14 })
    const ids = chance.unique(vinGenerator.generateVin, numVins)
    const cars = ids.map((vin) => {
      const indx = chance.integer({ min: 0, max: data.count - 1 })
      const color = chance.pickone(colors)
      const { group, make, model, year } = data.cars[indx]
      const exotic = gtExotics.groups.includes(group)
      const racing = exotic && group !== 'Gr.X'
      const number = racing ? chance.integer({ min: 3, max: 99 }) : undefined
      const obj = {
        id: shortid.generate(),
        vin,
        make,
        model,
        year,
        group,
        color,
        exotic,
        racing,
        number,
      }
      return obj
    })

    const dealer = {
      id: shortid.generate(),
      dealerId: id,
      name: `${chance.name()} ${chance.pickone(dealerSuffix)}`,
      vehicles: cars,
    }
    return [...bucket, dealer]
  }, [])

  return dealers
}

const generateSummaryFor = (dealers) => {
  const cars = dealers.reduce((bucket, dealer) => {
    dealer.vehicles.forEach((car) => {
      bucket.push(car)
    })
    return bucket
  }, [])

  const groups = filters.groups(cars).sort()
  const makes = filters.makes(cars).sort()
  const vins = cars.map((car) => car.vin)

  const summary = {
    groups,
    makes,
    vins,
    counts: {
      dealers: dealers.length,
      groups: groups.length,
      makes: makes.length,
      vehicles: vins.length,
    },
  }

  return summary
}

const dataSet = (data, id) => {
  const dealers = generateDealers(data)
  const summary = generateSummaryFor(dealers)

  return {
    id,
    data: {
      dealers,
    },
    summary,
  }
}

// NOTE:  verify the data... (property order matters)
const compare = (a, b) => JSON.stringify(a) === JSON.stringify(b)

const delay = () => {
  return chance.integer({ min: 500, max: 3500 })
}

const randomArray = (length, max) =>
  Array(length)
    .fill()
    .map(() => Math.round(Math.random() * max))

export {
  chance,
  colors,
  dataSet,
  compare,
  delay,
  gtCars,
  gtExotics,
  gtSports,
  randomArray,
}
