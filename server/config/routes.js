var controller = require('../controllers/controllers');

module.exports = app => {
    app.post('/api/login', controller.loginReg);
    app.get('/api/login', controller.getCurrentUser);
    app.get('/logout', controller.logout);
    app.post('/api/create', controller.createPoll);
    app.get('/api/dashboard', controller.getPolls);
    app.get('/api/view/:id', controller.getPoll);
    app.delete('/api/delete/:id', controller.delete);
    // app.get('/api/view/like/:id', controller.likes);

}