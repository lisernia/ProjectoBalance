module.exports = (sequelize, DataTypes) => {
	let alias = 'usuarios';

	let columns = {
		idusuarios: {
			type: DataTypes.STRING,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
		},
        nombre: DataTypes.STRING,
        apellido: DataTypes.STRING,
		password: DataTypes.STRING,
		email: DataTypes.STRING,
         
	};
	const usuarios = sequelize.define(alias, columns);

	usuarios.associate = (models) => {
		// hasMany
		usuarios.hasMany(models.operaciones, {
			as: 'operaciones',
			foreignKey: 'idusuarios'
		})
	}

	return usuarios;
}