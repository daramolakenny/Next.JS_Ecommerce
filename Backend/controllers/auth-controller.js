const Client = require('../models/client');


const registerClient = async(req, res) => {
    try {
        const { username, phone, email, password, role } = req.body;
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Oops! Something went wrong, try again",
        });
       console.log("error", error); 
    }
};

const loginClient = async(req, res) => {
    try {
        const {username, password} = req.body;
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Something went wrong, pls try again",
        })
    }
};

module.exports = {registerClient, loginClient};