import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ success: false, message: "Not Authorized. Login Again" });
    }
    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

        req.user = { id: tokenDecode.id };

        next();
    } catch (error) {
        return res.status(401).json({ success: false, message: "Invalid or Expired Token" });
    }
}
export default userAuth;