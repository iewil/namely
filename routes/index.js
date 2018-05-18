var express = require('express');
var router = express.Router();

var reqObj = {
	'name': 'Liwei',
	'company': 'Govtech',
	'designation': 'Product Manager',
	'actions': [
		{
			'type': 'email',
			'display_text': 'Email',
			'content': {
				'email_address': 'liwei@data.gov.sg'
			}
		},
		{
			'type': 'website',
			'display_text': 'Website',
			'content': {
				'url': 'data.gov.sg'
			}
		},
		{
			'type': 'website',
			'display_text': 'Website1',
			'content': {
				'url': 'data.gov.sg'
			}
		},
		{
			'type': 'website',
			'display_text': 'Website2',
			'content': {
				'url': 'data.gov.sg'
			}
		},
		{
			'type': 'address',
			'display_text': 'Address',
			'content': {
				'address': '1 Fusionopolis View, Sandcrawler Building, Singapore 138577'
			}
		}
		]
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', reqObj);
});

module.exports = router;
