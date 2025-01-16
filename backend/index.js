import dotenv from 'dotenv';
dotenv.config(); 
import express from 'express';
import cors from 'cors';
// Import routes
import userRoutes from './routes/users.js';
// App config
const app = express();
import sequelize from './db/conn.js';

// Models
import User from './models/User.js';

// Middlewares
app.use(express.json());
app.use(cors())

// Routes
app.use('/', userRoutes);

// DB config
const port = process.env.PORT || 3000;
sequelize
    .sync()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is running on ${port} port`);
        });
    }).catch((err) => console.log(err));


    /* aaaa */
