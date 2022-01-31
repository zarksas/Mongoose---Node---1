const express = require('express');
const mongoose = require('mongoose')
const app = express();



app.use(require('./routes/students.route'));
app.use(require('./models/Student.model'));



mongoose.connect("mongodb+srv://vaharho:85j86aaa@cluster0.bnqwk.mongodb.net/test", {
    
  }).then(() => console.log('Успешно соединились с сервером MongoDB'))
  .catch(() => console.log('Ошибка при соединении с сервером MongoDB'))



app.listen(4040, () => {
    console.log('Server start')
})