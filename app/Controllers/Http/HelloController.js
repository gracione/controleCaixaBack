'use strict'

class HelloController {
  async index ({ response }) {
    return response.json({ message: 'Hello, world!' })
  }
}

module.exports = HelloController
