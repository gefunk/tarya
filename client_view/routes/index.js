var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/maps', function(req, res, next){
	res.sendFile('maps.html', {root: __dirname+"/../views/"});
})

router.get('/new', function(req, res, next){
	data = {
		'weights' : 
		[
			'pound(s)', 
			'kilogram(s)', 
			'ounces', 
			'metric ton'
		], 
		'volume': [
			'cubic feet',
			'cubic meters'
		],
		'distance': [
			'feet',
			'meters'
		]};
	res.render('new', data);
	
})

module.exports = router;
