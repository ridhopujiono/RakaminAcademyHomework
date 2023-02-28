
const bcrypt = require('bcrypt'); // Hasing with bycript
const jwt = require('jsonwebtoken'); // JsonWebToken
const SECRET_KEY = require('../config/secret.js'); // Secret Key for JWT
const userModel = require('../models/userModel.js'); // User Model

exports.register = async function (req, res) {
    let {email, password, gender, role} = req.body;
    try {
        const checkEmailExists = await userModel.findByEmail(email);
        if(checkEmailExists.length > 0) {
            res.status(403).send({
                message: 'Youre email already in use'
            });
        }else{
            password = bcrypt.hashSync(password.toString(), 10);
            const createUser = await userModel.create([email, password, gender, role]);

            res.status(201).send({
                message: 'Created successfully'
            });
        }
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}
exports.login = async function (req, res){
    let {email, password} = req.body;
    password = password.toString();
    const findByEmail = await userModel.findByEmail(email);
    if(findByEmail.length > 0) {
        const checkPassword = bcrypt.compareSync(password, findByEmail[0].password);

        if(checkPassword) {
            const token = jwt.sign(
                {
                    id: findByEmail[0].id
                }, 
                SECRET_KEY.value
            );
            
            res.status(200).send({
                message: 'Logged in successfully',
                token: token
            });
        }else{
            res.status(403).send({
                message: 'Invalid credentials'
            });
        }
    }
}