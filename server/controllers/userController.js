import userModel from "../models/userModel.js";

export const getUserData = async (req, res)=>{
    try {
        const { userId } = req.body;
        const user = await userModel.findById(userId);
        if (!user) {
            return res.json({ success: false, message: "User not found" })
        }

        res.json({
            success:true,
            userData:{
                name:user.name,
                email:user.email,
                gender:user.gender,
                phone:user.phone,
                profileImage:user.profileImage,
                isAccountVerified:user.isAccountVerified
            }
        });
    } catch (error) {
        return res.json({ success: false, message: error.message })

    }
}
export const updateUserData = async (req, res)=>{
    try {
        
    } catch (error) {
        return res.json({ success: false, message: error.message })

    }
}