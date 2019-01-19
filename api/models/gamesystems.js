'use strict';
module.exports = (sequelize, DataTypes) => {
    const gamesystems = sequelize.define('gamesystems',
    {
       /* id : {
            type: DataTypes.INTEGER,
            primaryKey: true
        },*/
        name : {
            type: DataTypes.STRING
        },
        descripcion : {
            type: DataTypes.STRING
        },

    });
     console.log(gamesystems);
    return gamesystems;
};