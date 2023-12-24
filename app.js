// app.js
import express from 'express';
const app = express();
import router from './routes/taskRoutes.js';
import connectDB from './db/connect.js';
import notFound from './middleware/not-found.js';

//midlleware
app.use(express.json());
app.use(notFound);


app.use('/api/v1/tasks', router);


const port = 3000;

const start = async () => {
    try {
        await connectDB();
        console.log('connected to db');
        app.listen(port, console.log(`Server is listening on port ${port}`));
    } catch (e) {
        console.log('not connected to db');
        console.log(e);
    }
}

start();

