const {Student, Project, StudentProject} = require('../models');

class StudentProjectController {
    static main(req, res) {
        Student.findByPk(+req.params.id, {include: [Project]})
        .then(data => {
            res.render('student-project', {data});
            // res.send(data);
        })
        .catch(err => {
            res.send(err);
        })
    }

    static getNew(req, res) {
        let studentData, projectData;
        console.log(req.params)
        Student.findByPk(+req.params.id)
        .then(data => {
            studentData = data;
            return Project.findAll();
        })
        .then(data => {
            projectData = data;
            res.render('add-project', {studentData, projectData})
        })
        .catch(err => {
            res.send(err);
        })
    }

    static postNew(req, res) {
        let data = {
            StudentId: +req.params.id,
            ProjectId: +req.body.ProjectId
        }

        StudentProject.create(data)
        .then(() => {
            res.redirect(`/students/${+req.params.id}/projects`)
        })
        .catch(err => {
            res.send(err);
        })
    }
}

module.exports = StudentProjectController;