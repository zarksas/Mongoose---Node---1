const Student = require('../models/Student.model')

module.exports.studentsControllers = {

    getStudents: (req, res) => {
        Student.find({
            name: 'John',
            phone: '1333131',
            age: 19 
          }).then(() => {
            res.json("Студент добавлен")
          })
    },

    postStudents: (req, res) => {
        Student.create({
            name: 'Will',
            phone: '13414',
            age: 19 
          }).then(() => {
            res.json("Студент добавлен")
          })
    },

    deleteStudents: (req, res) => {
        Student.findByIdAndRemove({
            name: 'Kate',
            phone: '131414',
            age: 20
        }).then(() => {
            res.json("студент удален по id:" + req.params.id)
        })
    },

    patchStudents: (req, res) => {
        Student.findByIdAndUpdate({
            name: 'Nill',
            phone: '131141',
            age: 44
        }).then(() => {
            res.json("студент изминен по id:" + req.params.id)
        })
    }
}