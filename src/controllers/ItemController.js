const Item = require('../models/Item')

module.exports = {
  async index(request, response) {
    return response.json({
      id: '1',
      decription: 'todo test',
      checked: false
    })
  }
}