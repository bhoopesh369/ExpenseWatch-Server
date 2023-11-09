const db = require("../db/SQLdb.js");
const Student = db.students;

//Insert new student
exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
        message: "Content can not be empty!"
    });
    return;
    }
    
  // Create a student
  const student = {
    name: req.body.name,
    admission: req.body.admission,
    class:req.body.class,
    city:req.body.city
  };

  // Save student in the database
  Student.create(student)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error occurred while creating the Student."
      });
    });
};
