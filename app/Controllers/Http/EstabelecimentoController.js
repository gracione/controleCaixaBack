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

  async getById ({ params, response }) {
    const estabelecimento = await Estabelecimento.find(params.id)

    if (!estabelecimento) {
      return response.status(404).json({ message: 'Estabelecimento não encontrado' })
    }

    return response.json({ estabelecimento })
  }

  async atualizar ({ params, request, response }) {
    const estabelecimento = await Estabelecimento.find(params.id)

    if (!estabelecimento) {
      return response.status(404).json({ message: 'Estabelecimento não encontrado' })
    }

    const data = request.only([
      'nome',
      'cnpj',
      'endereco',
      'contato',
      'email',
      'pin'
    ])

    estabelecimento.merge(data)
    await estabelecimento.save()

    return response.json({ message: 'Estabelecimento atualizado com sucesso', estabelecimento })
  }
}

module.exports = EstabelecimentoController
