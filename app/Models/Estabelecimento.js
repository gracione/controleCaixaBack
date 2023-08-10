'use strict'

const Model = use('Model')

class Estabelecimento extends Model {
    
    
  static get table () {
    
    return 'estabelecimentos'
  }
  
}

module.exports = Estabelecimento
