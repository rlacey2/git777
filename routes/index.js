// router to handle http paths

var express = require('express');

var router = express.Router();

// DOGS
router.get('/api/v1/dogs', function(req, res) {
	res.status(200)
    res.json( { 'msg' : 'GET handler for /api/v1/dogs route.' } );
});

router.post('/api/v1/dogs', function(req, res) {
	res.status(200)
    res.send({ 'msg' : 'POST handler for /api/v1/dogs route.', 'data' : req.body });
});

router.put('/', function(req, res) {
	res.status(200)
    res.send({ 'msg' : 'PUT handler for /api/v1/dogs route.', 'data' : req.body});
});

router.delete('/api/v1/dogs', function(req, res) {
	res.status(200)
    res.send({ 'msg' : 'Delete handler for /api/v1/dogs route.', 'data' : req.body});
});

// CATS
router.get('/api/v1/cats', function(req, res) {
	res.status(200)
    res.json( { 'msg' : 'GET handler for /api/v1/cats route.' } );
});

router.post('/api/v1/cats', function(req, res) {
	res.status(200)
    res.send({ 'msg' : 'POST handler for /api/v1/cats route.'});
});

router.put('/api/v1/cats', function(req, res) {
	res.status(200)
    res.send({ 'msg' : 'PUT handler for /api/v1/cats route.'});
});

router.delete('/api/v1/cats', function(req, res) {
	res.status(200)
    res.send({ 'msg' : 'Delete handler for /api/v1/cats route.'});
});

// BIRDS
router.get('/api/v1/birds', function(req, res) {
	res.status(200)
    res.json( { 'msg' : 'GET handler for /api/v1/birds route.' } );
});

router.post('/api/v1/birds', function(req, res) {
	res.status(200)
    res.send({ 'msg' : 'POST handler for /api/v1/birds route.'});
});

router.put('/api/v1/birds', function(req, res) {
	res.status(200)
    res.send({ 'msg' : 'PUT handler for /api/v1/birds route.'});
});

router.delete('/api/v1/birds', function(req, res) {
	res.status(200)
    res.send({ 'msg' : 'Delete handler for /api/v1/birds route.'});
});
 
module.exports = router; // finally export the router that handles the routes