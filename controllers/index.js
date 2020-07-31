const StudentController = require('./student');
const ProjectController = require('./project');
const StudentProjectController = require('./studentproject');
const {Student, Project} = require('../models')
const session = require('express-session');
//const { eq } = require('sequelize/types/lib/operators');

class HomeController {
    static main(req, res) {
        res.render('home');
    }

    static login(req, res) {
        StudentController.findOne({
            where: {
                name: req.body.name
            }
        })
        .then(data =>{
            if(!data){
                res.redirect('home')
            }
            else{
                res.redirect('/students')
            }
        })
        .catch(err =>{
            res.send(err)
        })
        //res.render('login');
    }
}

module.exports = {HomeController, StudentController, ProjectController, StudentProjectController};