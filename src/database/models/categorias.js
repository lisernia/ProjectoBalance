module.exports = (sequelize, DataTypes) => {
	let alias = 'categorias';

	let columns = {
		idcategorias: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
		},
		nombre: DataTypes.STRING,
	};


	const categorias = sequelize.define(alias, columns);

	categorias.associate = (models) => {
		// hasMany
	
		categorias.belongsToMany(models.operaciones,{
			as: "operaciones",
			through: "catopera",
			foreignKey: "idcategorias",
			otherKey: "idoperacion",
		})
	}

	return categorias;
}