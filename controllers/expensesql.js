const db = require("../db/SQLdb.js");
const Expense = db.expenses;

exports.addExpense = (req, res) => {
    const { title, amount, category, description, date } = req.body;
    const expense = {
        title,
        amount,
        category,
        description,
        date
    };
    Expense.create(expense)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error occurred while creating the Expense."
            });
        });
}

exports.deleteExpense = (req, res) => {
    const id = req.params.id;
    Expense.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Expense was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Expense with id=${id}. Maybe Expense was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Expense with id=" + id
            });
        });
}
