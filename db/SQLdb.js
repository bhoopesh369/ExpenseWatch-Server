
const Sequelize = require("sequelize");
const { DataTypes } = require("sequelize");
const sequelizeInstance = new Sequelize(
    'ExpenseTrackerDB',
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

const SQLdb = {};

SQLdb.Sequelize = Sequelize;
SQLdb.sequelize = sequelizeInstance;

SQLdb.students = require("../models/Student")(sequelizeInstance, Sequelize);
SQLdb.expenses = require("../models/Expense")(sequelizeInstance, Sequelize);

SQLdb.sequelize.sync().then(() => {
    console.log('SQL Database & tables created successfully!');
}   
).catch((error) => {
    console.error('Unable to create SQL Database & tables : ', error);
}
);
sequelizeInstance.authenticate().then(() => {
    console.log('SQL Connection Established');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});

module.exports = SQLdb;







// const Expense = sequelize.define("expenses", {
//     title: {
//         type: DataTypes.STRING,
//         maxLength: 50
//     },
//     amount: {
//         type: DataTypes.NUMBER,
//         maxLength: 20,
//     },
//     type: {
//         type: DataTypes.STRING,
//     },
//     date: {
//         type: DataTypes.DATE,
//     },
//     category: {
//         type: DataTypes.STRING,
//     },
//     description: {
//         type: DataTypes.STRING,
//         maxLength: 20,
//     },
// });

// // sequelize.sync().then(() => {
// //     console.log('Book table created successfully!');
// // }).catch((error) => {
// //     console.error('Unable to create table : ', error);
// // });

// module.exports = { sequelize }
