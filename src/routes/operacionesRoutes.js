const express = require('express');
const router = express.Router();

/*====== Controller ======*/ 
const controller = require('../controllers/operacionesController');

// Listado - GET - index 
router.get('/', controller.index);

// Creación - GET - create
router.get('/create', controller.create);

// Creación - POST - create
router.post('/create', controller.store);

// Eliminar - DELETE - destroy
router.delete('/:idoperacion', controller.destroy);

// Detalle - GET - show /operacion/1
router.get('/:idoperacion', controller.show); 

 
/* GET - Producto-> /products/update/id*/
router.get('/update/:idoperacion', controller.edit);

/* GET - Producto-> /products/update/id*/
router.post('/update/:idoperacion', controller.update);

module.exports = router;
