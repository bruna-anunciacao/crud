import { DataTypes } from "sequelize";
import sequelize from '../db/conn.js';

const User = sequelize.define("User",
    {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            require: true,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            require: true
        },
    }
);

export default User;
