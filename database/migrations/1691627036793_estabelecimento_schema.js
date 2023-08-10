'use strict'

const Schema = use('Schema')

class CreateEstabelecimentosTableSchema extends Schema {
  up () {
    this.create('estabelecimentos', (table) => {
      table.increments()
      table.string('nome', 255).notNullable()
      table.string('cnpj', 18).notNullable()
      table.string('endereco', 255)
      table.string('contato', 100)
      table.string('email', 255)
      table.string('pin', 10)
      table.timestamps()
    })
  }

  down () {
    this.drop('estabelecimentos')
  }
}

module.exports = CreateEstabelecimentosTableSchema
