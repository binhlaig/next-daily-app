import  Mongoose  from "mongoose";

export const connectDB = async () => {
    const connection ={}
    try {
        if(connection.isConnected) return;
        const db = await Mongoose.connect(process.env.MONGO_URL);
        connection.isConnected = db.connections[0].readyState;
      } catch (error) {
        console.log(error);
        throw new Error(error);
      }
    
};