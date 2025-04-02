import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    gender: { type: String, enum: ['Male', 'Female', 'Other'], default: '' },
    phone: { type: String, default: '', unique: true, trim: true },
    profileImage: { type: String, default: '' }, 
    password: { type: String, required: true },
    verifyOtp: { type: String, default: '' },
    verifyOtpExpireAt: { type: Number, default: 0 },
    isAccountVerified: { type: Boolean, default: false },
    resetOtp: { type: Number, default: '' },
    resetOtpExpireAt: { type: Number, default: 0 },
})

const userModel = mongoose.models.user || mongoose.model('user', userSchema);

export default userModel;