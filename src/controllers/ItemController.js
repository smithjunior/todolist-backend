const Item = require('../models/Item')

module.exports = {
  async index(request, response) {
    return response.json(await Item.find({}))
  },
  async store(request, response) {
    const {
      description
    } = request.body

    const item = await Item.create({
      description: description,
      checked: false
    })

    return response.json(item)
  },
  async destroy(request, response) {
    const {
      idItem
    } = request.params

    const removedItem = await Item.remove({
      _id: idItem
    })

    return response.json(removedItem)
  }
}