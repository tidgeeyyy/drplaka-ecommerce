import express from 'express';
import userRoutes from './routes/userRoutes.js';
import systemRoutes from './routes/systemRoutes.js';
const app = express()
const port = 5000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Use the user routes
app.use('/api/users', userRoutes);

app.use('/api/system', systemRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`));



