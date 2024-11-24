import pool from '../db.js'; 
import bcrypt from 'bcrypt';

// Get all users
export const authenticateUser = async (req, res) => {
   const password ="test";
   const hashedPassword = await bcrypt.hash("hehe", 10);
    console.log(password, hashedPassword);

    const isMatch = await bcrypt.compare(password, hashedPassword);
    if (isMatch) {
      console.log("Password is correct!");
    } else {
      console.log("Incorrect password!");
    }

    try {
        const result = await pool.query('SELECT * FROM "inventory_TB"');
        
        res.status(200).json({
            message: "Inventory fetched successfully",
            data: result.rows,
            
        });
        console.log(result.rows);
    } catch (error) {
        console.error("Error fetching inventory:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const addUser = async (req, res) => {


};

export const addUser_address = async (req, res) => {

};

export const getUser_address = async (req, res) => {

};


export const updateUser = async (req, res) => {

};

export const updateUser_address = async (req, res) => {

};

export const deleteUser = async (req, res) => {

};