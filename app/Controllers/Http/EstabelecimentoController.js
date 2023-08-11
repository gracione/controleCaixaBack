'use strict'

const Estabelecimento = use('App/Models/Estabelecimento')

class EstabelecimentoController {
  async listar ({ response }) {
    const estabelecimentos = await Estabelecimento.all()
    return response.json({ message: estabelecimentos })
  }

  async inserir ({ request, response }) {
    const data = request.only([
      'nome',
      'cnpj',
      'endereco',
      'contato',
      'email',
      'pin'
    ])

    const novoEstabelecimento = new Estabelecimento()
    novoEstabelecimento.fill(data)
  
    await novoEstabelecimento.save()

    return response.status(201).json({ message: 'Estabelecimento criado com sucesso', estabelecimento: novoEstabelecimento })
  }
}

module.exports = EstabelecimentoController
