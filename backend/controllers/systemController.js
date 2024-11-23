import pool from '../db.js'; 

// Get all users
export const fetchRecords = async (req, res) => {
    try {
        // Fetch all inventory records from the database
        const result = await pool.query('SELECT * FROM "inventory_TB"');
        
        // Respond with the fetched records
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