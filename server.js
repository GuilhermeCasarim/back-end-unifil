const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;
const cepRegex = /^[0-9]{5}-?\[0-9]{3}$/;


app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/index', (req, res) => {
    res.send('index');
});

app.get('/consulta-cep/:cep', async (req, res) => {
    const cep = req.params.cep;

        if(cepRegex.test(cep)){
            try {
                const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
                res.json(response.data);
            } catch (error) {
                console.error('Erro na consulta da requisição Cep', error);
                res.status(500).send("Erro ao consultar Cep");
            }
        }else{
            res.status(400).send("Cep Invalido");
        }
    });
