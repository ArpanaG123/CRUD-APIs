const userModel = require('../model/userModel');
const bcrypt = require('bcrypt');

const createUserDetails = async(req,res) => {
    try {
        const {email,password,contact,location} = req.body;

        // Hash the password using bcrypt
        const hashPassword = await bcrypt.hash(password,10);

        // Use the create method to directly create and save the user details
        const result = await userModel.create({
            email:email,
            password:hashPassword,
            contact:contact,
            location:location
        })

        // Check if the user details are created and saved successfully
        if (result) {
            return res.status(200).json({ message: 'User details created successfully', result });
        } else {
            return res.status(500).json({ error: 'Failed to create user details' });
        }

        
    } catch (error) {
        // Handle any errors that occur during the process
        console.error('Error creating user details:', error);
        return res.status(500).json({ error: 'Internal server error' }); 
    }
}

module.exports = createUserDetails;
