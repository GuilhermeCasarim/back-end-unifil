const {Endereco} = require('../models')

exports.createEndereco = async (req, res) => {
    try{
        const{Cep, Logradouro, Complemento, Bairro, Cidade, Estado, MunicipioIBGE} = req.body;

        const novoEndereco = await Endereco.create({
            Cep,
            Logradouro,
            Complemento,
            Bairro,
            Cidade,
            Estado,
            MunicipioIBGE
        })
        res.status(201).json(novoEndereco)

    } catch(error){
        res.status(500).json({error: 'Erro ao criar endereço', details: error.message})
    }
}

exports.getAllEnderecos = async(req, res) => {
    try{
        const enderecos = await Endereco.findAll()
        res.status(200).json(enderecos)
    } catch(error){
        res.status(500).json({error: 'Erro ao buscar endereços', details: error.message})
    }
}

exports.getEnderecoById = async (req, res) => {
    try{
        const { Id } = req.params;
        const endereco = await Endereco.findByPk(Id);

        if (!endereco) {
            return res.status(404).json({ error: 'Endereço não encontrado' });
        }

        res.status(200).json(enderecos);
    } catch (error){
        res.status(500).json({ error: 'Erro ao buscar endereço', details: error.message });
    }
};

exports.updateEndereco = async(req, res) => {
    try{
        const {Id} = req.params
        const {Cep, Logradouro, Complemento, Bairro, Cidade, Estado, MunicipioIBGE} = req.body

        const endereco = await Endereco.findByPk(Id) //where sql
        if(!endereco){
            return res.status(404).json({error: 'Endereço não encontrado'})
        }

        endereco.Cep = Cep
        endereco.Logradouro = Logradouro
        endereco.Numero = Numero
        endereco.Complemento = Complemento
        endereco.Bairro = Bairro
        endereco.Cidade = Cidade
        endereco.Estado = Estado
        endereco.MunicipioIBGE = MunicipioIBGE

        await endereco.save()

        res.status(200).json(endereco)

        

    } catch(error){
        req.status(500).json({error: 'Erro ao atualizar endereço', details: error.message})
    }
}

//exclusao endereco

exports.deleteEndereco = async(req, res) => {
    try{
        const {Id} = req.params
        const endereco = await Endereco.findByPk(Id)
        if(!endereco){
            return res.status(404).json({error: 'Endereco não encontrado'})
        }
        await endereco.destroy()
        res.status(204).send()

    } catch(error){
        res.status(500).json({error: 'Erro ao deletar endereço', details: error.message})
    }
}

//teste
const axios = require('axios')

exports.getCEP = async (req, res) => {

    try{
        const cep = req.body

        const api = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

        if (!api) {
            return res.status(404).json({ error: 'Endereço não encontrado' });
        }

        const {logradouro, bairro, localidade, uf, ibge} = api.data

        const novoEndereco = await Endereco.create({
            Cep: cep,
            Logradouro: logradouro,
            Numero: req.body.numero,
            Complemento: req.body.complemento, 
            Bairro: bairro,
            Cidade: localidade, 
            Estado: uf, 
            MunicipioIBGE: ibge
        });

        res.status(200).json(novoEndereco);
    } catch (error){
        res.status(500).json({ error: 'Erro ao buscar endereço', details: error.message });
    }
};
