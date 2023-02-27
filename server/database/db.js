import mongoose from 'mongoose';

const Connection = async (username, password) => {
    // const URL = `mongodb://localhost:27017/flipkart`
    const URL =`mongodb+srv://username:user1234@flipkart-mern-clone.qyiqrlm.mongodb.net/?retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;