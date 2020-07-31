const {Student, Projects} = require('../models');

class StudentController {
    static main(req, res) {
        //res.send('hell0')
        Student.findAll()
        .then(data => {
            res.render('students', {data})
            // res.send(data)
        })
        .catch(err => {
            res.send(err)
        })
    }

    static getEditSpecial(req, res) {
        let id = req.params.id;
        res.render('new-picture', {id});
    }

    static postEditSpecial(req, res) {
        req.files.img.mv(`./img/${req.params.id}_myFace.jpg`, err => {
            if(err) {
                res.send(err);
            } else {
                res.redirect('/students/');
            }
        });
    }

    static detail(req, res) {
        Student.findByPk(+req.params.id, {include: [Projects]})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.send(err);
        })
    }
}

module.exports = StudentController;