import taskModel from "../models/taskModel.js";

const getAllTasks = async (req, res) => {
    try {
        const tasks = await taskModel.find({})
        res.status(200).json({ tasks })
    } catch (e) {
        res.status(500).json({ msg: e })
    }
}

const createTasks = async (req, res) => {
    try {
        const task = await taskModel.create(req.body);
        res.status(201).json({ task })
    } catch (e) {
        res.status(500).json({ msg: e })
    }

}

const getTasks = async (req, res) => {
    try {
        const { id: taskID } = req.params;
        const task = await taskModel.findOne({ _id: taskID });
        if (!task) {
            return res.status(404).json({ msg: `No task with id : ${taskID}` });
        }
        res.status(200).json({ task })
    } catch (e) {
        res.status(500).json({ msg: e })
    }
}


const deleteTasks = async (req, res) => {
    try {
        const { id: taskID } = req.params;
        const task = await taskModel.findOneAndDelete({ _id: taskID });
        if (!task) {
            return res.status(404).json({ msg: `No task with id : ${taskID}` })
        }
        res.status(200).json({ task });
    } catch (e) {
        res.status(500).json({ msg: e })
    }
}

const updateTasks = async (req, res) => {
    try {
        const { id: taskID } = req.params;
        const task = await taskModel.findByIdAndUpdate({ _id: taskID }, req.body, {
            new: true,
            runValidators: true,
        });
        if (!task) {
            return res.status(404).json({ msg: `No task with id : ${taskID}` });

        }
        res.status(200).json({ task });
    } catch (e) {
        res.status(500).json({ msg: e });
    }
}


export default {
    getAllTasks, createTasks, getTasks, deleteTasks, updateTasks
};