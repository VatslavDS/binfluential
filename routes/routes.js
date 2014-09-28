
module.exports = function(app, User){

	app.get('/', function(req, res, next){
		res.render('index');
	});

	app.post('/api/register', function(req, res, next){
		var email = req.body.email;
		var name = req.body.name;
		var comment = req.body.comment;
		console.log(req.body);
		var currentUser = new User({
			name: name,
			comment: comment,
			email: email,
			date : new Date(Date.now())
		});
		currentUser.save(function(err){
			if(err){
				res.redirect(200,'/');
			} else {
				res.redirect(200, '/');
			}
		});
	});
}
