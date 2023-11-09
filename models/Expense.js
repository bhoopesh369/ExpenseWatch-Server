module.exports = (sequelize, Sequelize) => {
    const Expense = sequelize.define("Expense", {
        title: {
            type: Sequelize.STRING(50),
            allowNull: false,
            trim: true,
        },
        amount: {
            type: Sequelize.DECIMAL(10, 2),
            allowNull: false,
            trim: true,
        },
        type: {
            type: Sequelize.ENUM('expense', 'income'),
            defaultValue: 'expense',
        },
        date: {
            type: Sequelize.DATEONLY,
            allowNull: false,
        },
        category: {
            type: Sequelize.STRING(20),
            allowNull: false,
            trim: true,
        },
        description: {
            type: Sequelize.STRING(255),
            allowNull: false,
            trim: true,
        },
    });

    return Expense;
};