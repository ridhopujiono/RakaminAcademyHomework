const bcrypt = require('bcrypt'); // Hasing with bycript
const jwt = require('jsonwebtoken'); // JsonWebToken
const SECRET_KEY = require('../config/secret.js'); // Secret Key for JWT
const model = require('../models/userModel.js'); // User Model

exports.store = async function (req, res) {
    let { email, password, gender, role } = req.body;

    if(!(email && password && gender && role)){
        res.status(400).json({
            message: "Please fill all the fields!"
        });
    }else{
        try {
            const checkEmailExists = await model.findBy('email', email);
            if (checkEmailExists.length > 0) {
                res.status(403).send({
                    message: 'Youre email already in use'
                });
            } else {
                password = bcrypt.hashSync(password.toString(), 10);
                const createUser = await model.create([email, password, gender, role]);
    
                res.status(201).send({
                    message: `Registered as ${role}${role == 'Admin' ? `. This role can access any endppoint` : `. This role cannot access any endppoint. Must registed as Admin role first`}`
                });
            }
        } catch (error) {
            res.status(500).json({
                message: error.message
            })
        }
    }
}
exports.login = async function (req, res) {
    let { email, password } = req.body;
    password = password.toString();
    const findByEmail = await model.findBy('email', email);
    if (findByEmail.length > 0) {
        const checkPassword = bcrypt.compareSync(password, findByEmail[0].password);

        if (checkPassword) {
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
        } else {
            res.status(403).send({
                message: 'Invalid credentials'
            });
        }
    }else{
        res.status(403).send({
            message: 'Email not found'
        });
    }
}

exports.users = async function (req, res) {
    const result = await model.all();

    if(req.query.page && req.query.limit){
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;

        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;

        const data = result.slice(startIndex, endIndex);
        res.status(200).json({
            data: data,
            currentPage: page,
            totalPages: Math.ceil(result.length / limit)
        });
    }else{
        res.status(200).json({
            data: result
        });
    }
}
exports.getUser = async function (req, res) {
    const result = await model.findBy('id', req.params.id);
    res.status(200).json({
        data: result
    });
}

exports.update = async function (req, res) {
    try {
        const update = await model.update(req.body, { id: req.params.id });
        res.status(201).json({
            message: "User Updated Successfuly!"
        });
    } catch (error) {
        throw error;
        res.status(500).json({
            message: error.message
        })
    }
}

exports.delete = async function (req, res) {
    const checkId = await model.findBy('id', req.params.id);
    if(checkId.length > 0){
        const result = await model.delete('id', req.params.id);
        res.status(200).json({
            message: "User deleted successfuly!"
        });
    }else{
        res.status(404).json({
            message: "User not found!"
        });
    }
}