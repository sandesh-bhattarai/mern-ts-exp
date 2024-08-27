import { DataTypes } from "sequelize";
import { sequelize } from "../../config/db.config";


const UserModel = sequelize.define("users", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    name: {
        type: DataTypes.STRING, 
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false, 
        unique: true
    }
} , {
    timestamps: false
})

export default UserModel;