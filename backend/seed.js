import mongoose from "mongoose";
import "dotenv/config";
import foodModel from "./models/foodModel.js";

const food_list = [
    { name: "Greek salad", price: 12, description: "Food provides essential nutrients for overall health and well-being", category: "Salad", image: "1722865444288food_1.png" },
    { name: "Veg salad", price: 18, description: "Food provides essential nutrients for overall health and well-being", category: "Salad", image: "1722865514626food_2.png" },
    { name: "Clover Salad", price: 16, description: "Food provides essential nutrients for overall health and well-being", category: "Salad", image: "1722865628915food_3.png" },
    { name: "Chicken Salad", price: 24, description: "Food provides essential nutrients for overall health and well-being", category: "Salad", image: "1722865668073food_4.png" },
    { name: "Lasagna Rolls", price: 14, description: "Food provides essential nutrients for overall health and well-being", category: "Rolls", image: "1722865738489food_5.png" },
    { name: "Peri Peri Rolls", price: 12, description: "Food provides essential nutrients for overall health and well-being", category: "Rolls", image: "1722865934153food_6.png" },
    { name: "Chicken Rolls", price: 20, description: "Food provides essential nutrients for overall health and well-being", category: "Rolls", image: "1722865976487food_7.png" },
    { name: "Veg Rolls", price: 15, description: "Food provides essential nutrients for overall health and well-being", category: "Rolls", image: "1722866043779food_8.png" },
    { name: "Ripple Ice Cream", price: 14, description: "Food provides essential nutrients for overall health and well-being", category: "Deserts", image: "1722866109947food_9.png" },
    { name: "Fruit Ice Cream", price: 22, description: "Food provides essential nutrients for overall health and well-being", category: "Deserts", image: "1722866148130food_10.png" },
    { name: "Jar Ice Cream", price: 10, description: "Food provides essential nutrients for overall health and well-being", category: "Deserts", image: "1722866329894food_11.png" },
    { name: "Vanilla Ice Cream", price: 12, description: "Food provides essential nutrients for overall health and well-being", category: "Deserts", image: "1722866385025food_12.png" },
    { name: "Chicken Sandwich", price: 12, description: "Food provides essential nutrients for overall health and well-being", category: "Sandwich", image: "1722866412882food_13.png" },
    { name: "Vegan Sandwich", price: 18, description: "Food provides essential nutrients for overall health and well-being", category: "Sandwich", image: "1722866469319food_14.png" },
    { name: "Grilled Sandwich", price: 16, description: "Food provides essential nutrients for overall health and well-being", category: "Sandwich", image: "1722866504992food_15.png" },
    { name: "Bread Sandwich", price: 24, description: "Food provides essential nutrients for overall health and well-being", category: "Sandwich", image: "1722866560218food_16.png" },
    { name: "Cup Cake", price: 14, description: "Food provides essential nutrients for overall health and well-being", category: "Cake", image: "1722866610567food_17.png" },
    { name: "Vegan Cake", price: 12, description: "Food provides essential nutrients for overall health and well-being", category: "Cake", image: "1722866647952food_18.png" },
    { name: "Butterscotch Cake", price: 20, description: "Food provides essential nutrients for overall health and well-being", category: "Cake", image: "1722866694357food_19.png" },
    { name: "Sliced Cake", price: 15, description: "Food provides essential nutrients for overall health and well-being", category: "Cake", image: "1722866729053food_20.png" },
    { name: "Garlic Mushroom", price: 14, description: "Food provides essential nutrients for overall health and well-being", category: "Pure Veg", image: "1722866777756food_21.png" },
    { name: "Fried Cauliflower", price: 22, description: "Food provides essential nutrients for overall health and well-being", category: "Pure Veg", image: "1722866830901food_22.png" },
    { name: "Mix Veg Pulao", price: 10, description: "Food provides essential nutrients for overall health and well-being", category: "Pure Veg", image: "1722866871307food_23.png" },
    { name: "Rice Zucchini", price: 12, description: "Food provides essential nutrients for overall health and well-being", category: "Pure Veg", image: "1722866909328food_24.png" },
    { name: "Cheese Pasta", price: 12, description: "Food provides essential nutrients for overall health and well-being", category: "Pasta", image: "1722866948105food_25.png" },
    { name: "Tomato Pasta", price: 18, description: "Food provides essential nutrients for overall health and well-being", category: "Pasta", image: "1722867018540food_26.png" },
    { name: "Creamy Pasta", price: 16, description: "Food provides essential nutrients for overall health and well-being", category: "Pasta", image: "1722867053413food_27.png" },
    { name: "Chicken Pasta", price: 24, description: "Food provides essential nutrients for overall health and well-being", category: "Pasta", image: "1722867110108food_28.png" },
    { name: "Buttter Noodles", price: 14, description: "Food provides essential nutrients for overall health and well-being", category: "Noodles", image: "1722867144188food_29.png" },
    { name: "Veg Noodles", price: 12, description: "Food provides essential nutrients for overall health and well-being", category: "Noodles", image: "1722867222977food_30.png" },
    { name: "Somen Noodles", price: 20, description: "Food provides essential nutrients for overall health and well-being", category: "Noodles", image: "1722867254829food_31.png" },
    { name: "Cooked Noodles", price: 15, description: "Food provides essential nutrients for overall health and well-being", category: "Noodles", image: "1722867630288food_32.png" }
];

const seedDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("DB Connected for Seeding");
        
        await foodModel.deleteMany({});
        console.log("Cleared existing food items");
        
        await foodModel.insertMany(food_list);
        console.log("Inserted all food items successfully!");
        
        mongoose.connection.close();
    } catch (err) {
        console.error("Error seeding DB:", err);
        mongoose.connection.close();
    }
};

seedDB();