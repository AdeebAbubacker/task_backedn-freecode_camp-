import mongoose from 'mongoose';
// const taskcollectionString = tasks;

const TaskSchema = new mongoose.Schema({
    name: {
        type: String, required: [true, 'must provide string'], trim: true,
        maxlength: [20, 'name cannot be more than 20 char'],
    },
    completed: {
        type:Boolean,
        default:true,
    }
});

export default mongoose.model('Task', TaskSchema, 'tasks');
