import { Sequelize, DataTypes } from "sequelize";
const db = {
    NAME: "web-science-forum",
    USERNAME: "web-science-forum",
    PASSWORD: "web-science-forum",
    options: {
        dialect: "mysql",
        timezone: "+00:00",
        host: "mysql.web-science-forum",
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
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        // sibbling: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        //     validate: {
        //         notEmpty: true,
        //     },
        // },
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

export const Community = sequelize.define(
    "Community",
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: true,
            },
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
    },
    {
        sequelize,
        freezeTableName: true,
        timestamps: true,
        paranoid: true,
    }
);

export const Topic = sequelize.define(
    "Topic",
    {
        title: {
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

export const Feed = sequelize.define(
    "Feed",
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

User.belongsToMany(Community, { through: "UserCommunity" });
Community.belongsToMany(User, { through: "UserCommunity" });

Post.belongsTo(Topic);
Topic.hasMany(Post);

Feed.belongsToMany(Post, { through: "FeedPost" });
Post.belongsToMany(Feed, { through: "FeedPost" });

const t = await sequelize.transaction();
try {
    const user = await User.create(
        {
            firstName: 'Bart',
            lastName: 'Simpson',
        },
        { transaction: t },
    );
    // await user.addSibling(
    //     {
    //         firstName: 'Lisa',
    //         lastName: 'Simpson',
    //     },
    //     { transaction: t },
    // );
    const community = await Community.create(
        { name: "TechTalk", description: "Discussion on latest tech trends" },
        { transaction: t }
    );
    const topic = await Topic.create(
        { title: "Artificial Intelligence" },
        { transaction: t }
    );
    const post = await Post.create(
        { name: "AI and Ethics", TopicId: topic.id },
        { transaction: t }
    );
    await t.commit();
} catch (error) {
    await t.rollback();
}
