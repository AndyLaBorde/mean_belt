var path		= require('path'),
	users		= require('../controllers/users'),
	sessions	= require('../controllers/sessions');

module.exports	= (app)	=> {
//all routes sent through angular must be singular//
	//all server routes are plural, examples below://
	app.post('/users', users.create);

	app.get('/sessions', sessions.find);
	app.delete('/sessions', sessions.delete);


	app.all("*", (req,res,next)	=>	{
		res.sendFile(path.resolve('./client/dist/index.html'))
	});
}