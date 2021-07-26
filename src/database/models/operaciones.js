module.exports = (sequelize, DataTypes) => {
	let alias = 'operaciones';

	let columns = {
		idoperacion: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
		},
		tipo: DataTypes.STRING,
        concepto: DataTypes.STRING,
		monto: DataTypes.INTEGER,
		fecha: DataTypes.STRING,
		 
	};



	const operaciones = sequelize.define(alias, columns);

	operaciones.associate = (models) => {
	 
		operaciones.associate = (models) => {
			// belongsTo 
			product.belongsTo(models.usuarios, {
				as: 'usuarios',
				foreignKey: 'idusuarios'
			});
			
		// belongsToMany
		operaciones.belongsToMany(models.categorias, {
			as: 'categorias',
			through: 'catopera',
			foreignKey: 'idoperacion',
			otherKey: 'idcategorias',
		});
	}
}
	operaciones.prototype.getRoundPrice = function () {
		return Number(this.monto).toFixed();
	}
 
	return operaciones;
}