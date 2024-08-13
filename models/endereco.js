const {Sequelize, DataType} = require('sequelize')
class Endereco extends Model {}

Endereco.init({
        Cep: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Numero: {
            type: DataTypes.INTEGER
        },
        Logradouro: {
            type: DataTypes.STRING
        },
        Complemento: {
            type: DataTypes.STRING
        }
    },
    {
        Sequelize,
        modelName: 'Endereco',
        tableName: 'enderecos',
        timestamps: true,
})


module.exports = Endereco;
