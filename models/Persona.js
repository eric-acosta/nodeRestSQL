module.exports = (sequelize, DataTypes) => {
    const Persona = sequelize.define('persona', {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      nombre: {
        type: DataTypes.STRING,
        required: true
      },
      apellidos: {
        type: DataTypes.STRING,
        required: true
      },
      edad: {
        type: DataTypes.UUID,
        allowNull: false
      }
    }, {
      paranoid: true,
      underscored: true
    });
    return Persona;
  };