const userModel = require('../model/userModel');

const updateUserDetails = async(req,res) => {
    const userId = req.params.id
    try {
        const updateData = await userModel.findByIdAndUpdate(userId,req.body, { new: true });

        // Check if the user details are updated and saved successfully
        if (updateData) {
            return res.status(200).json({ message: 'User details updated successfully',data:updateData });
        } else {
            return res.status(500).json({ error: 'Failed to update user details' });
        }
 
    } catch (error) {
        // Handle any errors that occur during the process
        console.error('Error while updating user details:', error);
        return res.status(500).json({ error: 'Internal server error' }); 
    }
}

module.exports = updateUserDetails;
