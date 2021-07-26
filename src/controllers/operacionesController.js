const db = require('../database/models');
const Operaciones = db.operaciones;
 
const Categorias = db.categorias;


module.exports = {
	index: (req, res) => {
		Operaciones
			.findAll()
			.then(operaciones => {
				return res.render('operaciones/index', { 
					title: ' Lista de operaciones',
					operaciones
				});
			})
			.catch(error => res.send(error));
	},
	
	show: (req, res) => {
		Operaciones
			.findByPk(req.params.idoperacion, {
				 
			})

		
			
			.then(operacion => {

				return res.render('operaciones/detail', { 
					title: `Detalle operacion ${operacion.concepto}`,
					operacion
				});

			
			})
			.catch(error => res.send(req.params.idoperacion));
	},

 
	
	
	create: (req, res) => {

		 
		let categorias = Categorias.findAll();

		Promise
			.all([ categorias])
			.then(results => {
				res.render('operaciones/create', {
					title: 'Crear una operacion',
					 
					categorias: results[0]
				});
			})
			.catch(error => res.send(error));

		return;

	
	},

	store: (req, res) => {
		Operaciones
			.create(req.body)
			.then(operacion => {
				// insertar en la pivot
				operacion.addCategories(req.body.categories);
				return res.redirect('operaciones/index');

				 
			})
			.catch(error => res.send(error));	
	},

	destroy: (req, res) => {
		Operaciones
			.findByPk(req.params.idoperacion, {
				//include: ["categorias"]
			})
			.then(operacion => {
				// operacion.removeCategories(operacion.categorias);
				operacion.destroy();
				return res.redirect('/operaciones');
			})
			.catch(error => res.send(error));
	},


	edit: (req, res) => {
				Operaciones
				.findByPk(req.params.idoperacion)
				.then( operacion => {
					return res.render('operaciones/edit', { 
						operacion 
					});
				})
				.catch(error => res.send(error));
  
	},

 
 
	update: (req, res) => {
		Operaciones
			.update(
				req.body,
				{
					where: {
						idoperacion: req.params.idoperacion
					}
				}
			)
			.then(() => res.redirect('/operaciones'))
			.catch(error => res.send(error));
	},
}