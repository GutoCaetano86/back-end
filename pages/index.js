const express = require('express');
const cors = require('cors');
const app = express();

const Home = require('../models/Home');
const MSGContact = require('../models/MSGContact');

app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization");
    app.use(cors());
    next();
});

app.get('/', async(req, res) => {
    
    await Home.findOne({
        attributes: [
            "text_one",
            "text_two",
            "text_three",
            "btn_title",
            "btn_link"
        ]
    })        
    .then((datahome) => {
            return res.json({
                erro: false,
                datahome: datahome
            });
    })
    .catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "ERRO: Nenhuma valor encontrado para a pg HOME."
            });
        });
});

app.post('/add-home', async(req, res) => {

    const datahome = await Home.findOne();

    if(datahome) {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: a pagina home possui um registro"
        });
    };

    await Home.create(req.body)
    .then(() => {
        return res.json({
            erro: false,
            mensagem: "Dados para a pg HOME Cadastrado com sucesso."
        });
    })
    .catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Dados não cadastrados."
        });
    });
});

app.post("/add-msg-contact", async (req, res) => {
    await MSGContact.create(req.body)
    .then((msgContact) => {   
        return res.json({
            erro: false,
            id: msgContact.id,
            mensagem: "Mensagem de contato enviado com sucesso!"
        })
    })
    .catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "ERRO: Mensagem de contato não enviada!"
        })
    })
});


app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});