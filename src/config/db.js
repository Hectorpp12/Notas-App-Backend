import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const dbURI = process.env.MONGODB_URI;

        mongoose.connect(dbURI)
        console.log('mongodb conectado correctamente')
    } catch (error) {
        console.error("Error al conectar a mongodb", error);
        proccess.exit(1);
    }
}