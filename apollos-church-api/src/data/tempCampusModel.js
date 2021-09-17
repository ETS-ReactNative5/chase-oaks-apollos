import { DataTypes } from 'sequelize';
import {
  defineModel,
  configureModel,
} from '@apollosproject/data-connector-postgres';

const createModel = defineModel({
  modelName: 'campus',
  resolveType: () => 'Campus',
  external: true,
  attributes: {
    name: DataTypes.TEXT,
    street1: DataTypes.TEXT,
    street2: DataTypes.TEXT,
    city: DataTypes.TEXT,
    state: DataTypes.TEXT,
    postalCode: DataTypes.TEXT,
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT,
    imageUrl: DataTypes.TEXT,
    digital: DataTypes.BOOLEAN,
    distanceFromLocation: DataTypes.VIRTUAL,
  },
  sequelizeOptions: {
    tableName: 'campus',
    underscored: true,
  },
});

const setupModel = configureModel(({ sequelize }) => {
  sequelize.models.campus.hasMany(sequelize.models.people);
  sequelize.models.people.belongsTo(sequelize.models.campus);
});

export { createModel, setupModel };
