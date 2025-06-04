import { Sequelize, DataTypes } from "sequelize";
const db = {
    NAME: "backend",
    USERNAME: "backend",
    PASSWORD: "backend",
    options: {
        dialect: "mysql",
        timezone: "+00:00",
        host: "mysql.emanuel.local",
        port: 3306,
        logging: function (str) {
            console.log(str);
        },
    },
};

export const sequelize = new Sequelize(db.NAME, db.USERNAME, db.PASSWORD,
    db.options);
export const User = sequelize.define(
    "User",
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
    },
    {
        sequelize,
        freezeTableName: true,
        timestamps: true,
        paranoid: true,
    }
);

export const Post = sequelize.define(
    "Post",
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
    },
    {
        sequelize,
        freezeTableName: true,
        timestamps: true,
        paranoid: true,
    }
);
User.hasMany(Post);
Post.belongsTo(User);
