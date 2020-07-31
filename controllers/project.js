const {Project} = require('../models');

class ProjectController {
    static main(req, res) {
        Project.findAll()
        .then(data => {
            res.render('projects', {data});
        })
        .catch(err => {
            res.send(err);
        })
    }

    static detail(req, res) {
    }
}

module.exports = ProjectController;