const userModel = require('../model/userModel');

const deleteUserDetails = async(req,res) => {
    const userId = req.params.id
    try {
        const deleteData = await userModel.findByIdAndDelete(userId);

        // Check if the user details are deleted successfully
        if (deleteData) {
            return res.status(200).json({ message: 'User details deleted successfully' });
        } else {
            return res.status(500).json({ error: 'Failed to delete user details' });
        }
 
    } catch (error) {
        // Handle any errors that occur during the process
        console.error('Error while deleting user details:', error);
        return res.status(500).json({ error: 'Internal server error' }); 
    }
}

module.exports = deleteUserDetails;
