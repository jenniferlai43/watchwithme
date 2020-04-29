module.exports = function(app) {
	// Other route groups go here, in the future
	// i.e. roomRoutes(app, db);
	app.get('/', (req, res) => {
	  res.render('index');
	});
};