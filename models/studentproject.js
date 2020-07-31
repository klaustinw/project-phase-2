'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StudentProject extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      StudentProject.belongsTo(models.Student);
      StudentProject.belongsTo(models.Project);
    }
  };
  StudentProject.init({
    StudentId: DataTypes.INTEGER,
    ProjectId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'StudentProject',
  });
  return StudentProject;
};