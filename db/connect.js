// import mongoose from 'mongoose'
// const connectionString = "mongodb+srv://john:1234@cluster0.ugua1yn.mongodb.net/?retryWrites=true&w=majority";

// const connectDB = (url) => {
//     return mongoose.connect(connectionString, {
//         useNewUrlParser: true,
//         useCreateIndex: true,
//         useFindAndModify: false,
//         useUnifiedTopology: true,
//     });
// }

// export default connectDB;


import mongoose from 'mongoose';

const connectDB = () => {
    const localConnectionString = "mongodb://127.0.0.1:27017/Sample";

    return mongoose.connect(localConnectionString, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    });
}

export default connectDB;
