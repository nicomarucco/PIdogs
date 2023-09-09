const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Temperament', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {freezeTableName: true,timestamps: false}
    );
  };
  