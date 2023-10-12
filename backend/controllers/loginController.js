const User = require( '../models/user' );
const bcrypt = require( "bcrypt" )
const jwt = require( 'jsonwebtoken' );



const login = async ( req, res ) =>
{
    try
    {
        const { mail, password } = req.body;
        const user = await User.findOne( { mail: mail.toLowerCase() } );
        if ( user && ( await bcrypt.compare( password, user.password ) ) )
        {
            const token = jwt.sign( {
                userId: user._id,
                mail
            },
                process.env.JWT_SECRET,
                { expiresIn: '7d' }


            )

            return res.status( 200 ).json( {
                userDetails: {
                    mail: user.mail,
                    username: user.username,
                    token: token

                }

            } )
        }
        return res.status( 400 ).send( "Invalid credinatials , please try again" );


    } catch ( error )
    {

        return res.status( 500 ).send( "something went wrong . please try again" );


    }


}

module.exports = login