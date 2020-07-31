const router = require('express').Router();
const {HomeController, StudentController, ProjectController, StudentProjectController} = require('../controllers');
//const session = require('express-session');

let count = 1
router.get('/login',

    //res.render('test')
    // res.render('login', { count })
    // count++

(req,res, next) =>{
    console.log('proses1')
    next()
},
(req,res, next) =>{
    console.log('proses2')
    next()
},
(req,res, next) =>{
    console.log('proses3')
    next()
},
(req,res, next) =>{
    if(!req.session.count){
        req.session.count = 1
    }
    else{
        req.session.count++
    }
    res.render('login', {count : req.session.count})
})

router.get('/', HomeController.main);
router.get('/', HomeController.login);
//router.get('/logout', HomeController.logout);

router.get('/students/', StudentController.main);
router.get('/students/:id/picture', StudentController.getEditSpecial);
router.post('/students/:id/picture', StudentController.postEditSpecial);

router.get('/students/:id/projects', StudentProjectController.main);
router.get('/students/:id/projects/add', StudentProjectController.getNew);
router.post('/students/:id/projects/add', StudentProjectController.postNew);

router.get('/projects/', ProjectController.main);
// router.get('/projects/:id/students', ProjectController.detail);

// router.get('/passengers/:id/covid-doc/add', CovidDocController.add);
// router.post('/passengers/:id/covid-doc/add', CovidDocController.addPost);
// router.get('/passengers/:id/covid-doc/edit', CovidDocController.edit);
// router.post('/passengers/:id/covid-doc/edit', CovidDocController.editPost);

// router.get('/passengers/:id/travel-doc/add', TravelDocController.add); 
// router.post('/passengers/:id/travel-doc/add', TravelDocController.addPost); 
// router.get('/passengers/:id/travel-doc/edit', TravelDocController.edit); 
// router.post('/passengers/:id/travel-doc/edit', TravelDocController.editPost); 

// router.get('/originAirport', OriginAirportController); //ini msh blm tau gmn
// router.get('/destinationAirport', DestinationAirportController); //ini blm tau gmn jdnya


module.exports = router;