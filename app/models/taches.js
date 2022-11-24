'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Taches extends Model {
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
  Taches.init({
    titre: { type: DataTypes.STRING, allowNull: false },
    debut: { type: DataTypes.DATE, allowNull: false },
    fin: { type: DataTypes.DATE, allowNull: false },
    // titre: DataTypes.STRING,
    description: { type: DataTypes.STRING, allowNull: false },
    output: { type: DataTypes.STRING, allowNull: false },
    estAlerteur: { type: DataTypes.BOOLEAN, allowNull: false }
  }, {
    createdAt: false,
    updatedAt: false,
    sequelize,
    modelName: 'Tache',
    freezeTableName: true,
  });
  return Taches;
};
