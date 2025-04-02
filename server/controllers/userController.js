import userModel from "../models/userModel.js";

export const getUserData = async (req, res) => {
    try {
        const userId  = req.user?.id;
        if (!userId) {
            return res.status(401).json({ success: false, message: "Unauthorized access" });
        }
        const user = await userModel.findById(userId);
        console.log(user)
        if (!user) {
            return res.json({ success: false, message: "User not found" })
        }

        res.json({
            success: true,
            userData: {
                name: user.name,
                email: user.email,
                gender: user.gender,
                phone: user.phone,
                profileImage: user.profileImage,
                isAccountVerified: user.isAccountVerified
            }
        });
    } catch (error) {
        return res.json({ success: false, message: error.message })

    }
}
export const updateUserData = async (req, res) => {
    try {
        const userId = req.user.id;
        if (!userId) {
            return res.status(401).json({ success: false, message: "Unauthorized access" });
        }
        const { name, email, phone, gender, dob } = req.body;
        if (!name || !email || !gender || !phone || !dob) {
            return res.status(400).send({
                success: false,
                message: "Please fill all the fields"
            })
        }

        let updateFields = { name, email, phone, gender, dob };

        // if (req.file) {
        //     updateFields.profileImage = req.file.path; // Assuming file upload middleware saves file path
        // }
        const updatedUser = await userModel.findByIdAndUpdate(userId, updateFields, { new: true });

        if (!updatedUser) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }
        // return res.json({ success: true, message: 'Profile updated successfully', user: updatedUser });
        return res.status(200).json({
            success: true,
            message: "Profile updated successfully",
            user: updatedUser
        });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });

    }
}