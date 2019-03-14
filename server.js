/*
|--------------------------------------------------------------------------
| APP Setup
|--------------------------------------------------------------------------
*/
	// Node Modules
	const express = require( 'express' );
	const bodyParser = require( 'body-parser' );

	// Primary Variable
	const app = express();

	// SSL/TLS Config
	const https = require( 'https' );
	const fs = require( 'fs' );
	const helmet = require( 'helmet' );
	const options = {
		key: fs.readFileSync( './key.pem' ),
		cert: fs.readFileSync( '/cert.pem' )
	};

/*
|--------------------------------------------------------------------------
| Global APP Init
|--------------------------------------------------------------------------
*/
	global._directory_base = __dirname;
	global._directory_root = '';

/*
|--------------------------------------------------------------------------
| APP Init
|--------------------------------------------------------------------------
*/
	// Parse request of content-type - application/x-www-form-urlencoded
	app.use( bodyParser.urlencoded( { extended: false } ) );

	// Parse request of content-type - application/json
	app.use( bodyParser.json() );

	// Add Helmet as a middleware
	app.use(helmet()); 

	// Server Running Message
	app.listen( 5000, () => {
		console.log( "Server run at " + 5000 )
	} );

	// Routing
	app.get( '/', ( req, res ) => {
		res.json( { 'message': "Testing SSL" } )
	} );

/*
|--------------------------------------------------------------------------
| Note
|--------------------------------------------------------------------------
| Install `brew install certbot`
|
*/