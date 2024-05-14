import mongoose from "mongoose";

const connectDB = async (URL) => {

    try {
        const options = { dbName: 'userData' }
        await mongoose.connect(URL, options)
        console.log('Connect successfully');
    } catch (error) {
        console.log(error);
    }

}

export { connectDB }