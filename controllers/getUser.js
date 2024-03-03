const userModel = require('../model/userModel');

const getUserDetails = async(req,res) => {
    const userId = req.params.id
    try {
        const getData = await userModel.find();

        // Check if the user details are available
        if (getData) {
            return res.status(200).json({ message: 'User details fetched successfully',data:getData });
        } else {
            return res.status(500).json({ error: 'Failed to fetch user details' });
        }
 
    } catch (error) {
        // Handle any errors that occur during the process
        console.error('Error while fetching user details:', error);
        return res.status(500).json({ error: 'Internal server error' }); 
    }
}

module.exports = getUserDetails;
