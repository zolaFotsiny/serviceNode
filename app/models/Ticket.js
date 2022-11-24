'use strict';
const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Ticket extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // mandefa
            // this.hasOne(models.TacheAlerte);
            // this.hasOne(models.Historique);
            // this.hasOne(models.Commentaire);
            // this.hasOne(models.SousTache);
            // this.hasOne(models.ProblemeTache);


            // this.belongsTo(models.Projet);
            // this.belongsTo(models.Statut);
            // this.belongsTo(models.Priorite);
            // this.belongsTo(models.Projets);    
        }

    }
    Ticket.init({
        contenus: { type: DataTypes.STRING, allowNull: false },
        document: { type: DataTypes.STRING, allowNull: false },

    }, {
        createdAt: false,
        updatedAt: false,
        sequelize,
        modelName: 'Ticket',
        freezeTableName: true,
    });
    return Ticket;
};
