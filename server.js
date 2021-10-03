require('dotenv').config();
const process   = require( 'process' );
const express   = require( 'express' );
const app       = express();
const http      = require( 'http' ).Server( app );

app.use( express.static(__dirname + '/public') );

/* Index.html */
app.get( '/', function( request, response ){
    response.sendFile( __dirname + '/public/index.html' );
} );

http.listen( process.env.PORT || 3306, ( error ) => {
    if ( error ) throw error;
    console.log( 'Server Started' );
} );
