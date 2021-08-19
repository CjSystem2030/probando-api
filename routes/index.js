const express = require('express');

const clienteController = require('../controllers/clienteControllers');

const router = express.Router();

module.exports = () => {

    // Agrega nuevos clientes via POST
    router.post('/clientes',
        clienteController.nuevoCliente 
    );

    // Obtener todos los clientes
    router.get('/clientes', 
        clienteController.mostrarClientes
    );
    return router
}