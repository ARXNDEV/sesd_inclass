import mongoose from "mongoose";
import bcrypt from "bcrypt";
import "dotenv/config";
import userModel from "./models/userModel.js";

const createAdmin = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("DB Connected for Seeding Admin");
        
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash("admin123", salt);

        const newAdmin = new userModel({
            name: "Admin User",
            email: "admin@test.com",
            password: hashedPassword,
            role: "admin"
        });

        await newAdmin.save();
        console.log("Admin user created successfully! (admin@test.com / admin123)");
        
        mongoose.connection.close();
    } catch (err) {
        console.error("Error seeding DB:", err);
        mongoose.connection.close();
    }
};

createAdmin();