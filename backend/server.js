const express = require( 'express' );
const http = require( 'http' );
const cors = require( 'cors' );
const mongoose = require( 'mongoose' );
require( "dotenv" ).config();
const authRoutes = require( './routes/authRoute' )


const Port = process.env.Port || process.env.API_Port;

const app = express();
app.use( express.json() )
app.use( cors() )


//register the routes
app.use( '/api/auth', authRoutes )
const server = http.createServer( app );
mongoose.connect( process.env.MONGO_URL ).then( () =>
{
    console.log( "Connected to MongoDB" );
    server.listen( Port, () =>
    {
        console.log( `Server is running on port ${ Port }` );
    } )
} ).catch( err =>
{
    console.log( "database connection error " );
    console.log( err );
} )
