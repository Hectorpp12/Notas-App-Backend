import express from 'express';
import dotenv from 'dotenv';
import notesRoutes from './routes/notesRoutes.js';
import { connectDB } from './config/db.js';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(cors({
    origin: ["http://localhost:5173", "https://polite-zabaione-3f8a24.netlify.app/"]
}))

app.use(express.json());

app.use("/api/notes", notesRoutes)

const PORT = process.env.PORT || 3001;

connectDB()

.then(() => {

    app.listen(PORT, () => {
        console.log(`Server is running on port http://localhost:${PORT}`);
    })

})