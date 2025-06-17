import Task from "../models/Task.model.js";
import User from "../models/User.models.js";

export const TaskCon = async (req, res) => {
  try {
    const userId = req.userId; // from Auth middleware
    const { task, date, time } = req.body;

    const createdTask = await Task.create({
      task,
      time,
      date,
    });

    if (createdTask) {
      // Push the new task _id into the user's list
      await User.findByIdAndUpdate(
        userId,
        { $push: { list: createdTask._id } },
        { new: true }
      );

      return res.json({ success: true, createdTask });
    } else {
      return res.json({ success: false, message: "Task not created" });
    }
  } catch (error) {
    console.error("Task Error:", error);
    return res.json({ success: false, message: "Task error" });
  }
};


export const getAllTasks = async (req, res) => {
  try {
    const userId = req.userId;

    const user = await User.findById(userId).populate("list");

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    return res.status(200).json({ success: true, tasks: user.list },
      { new: true }   );
  } catch (error) {
    console.error("Get tasks error:", error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};


/// Get single task data for update
export const getUpdateData = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ success: false, message: "Task not found" });
    }
    res.json({ success: true, updated: task });
  } catch (error) {
    console.error("Fetch single task error:", error);
    res.status(500).json({ success: false, message: "Error fetching task" });
  }
};

// PUT /api/task/update/:id
export const updateTask = async (req, res) => {
  try {
    const updated = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ success: false, message: "Task not found" });
    }

    res.json({ success: true, updated });
  } catch (error) {
    console.error("Task update error:", error);
    res.status(500).json({ success: false, message: "Update failed" });
  }
};

export const UpdateComp = async (req, res) => {
  try {
    const updated = await Task.findByIdAndUpdate(
      req.params.id,
      { completed: true },
      { new: true }        
    );

    if (!updated) {
      return res.status(404).json({ success: false, message: "Task not found" });
    }

    res.json({ success: true, updated });
  } catch (error) {
    console.error("Task complete error:", error);
    res.status(500).json({ success: false, message: "Marking as completed failed" });
  }
};


// DELETE /api/task/:id
export const deleteEle=  async (req, res) => {
  try {
    const deleted = await Task.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ success: false, message: "Task not found" });
    res.json({ success: true, message: "Task deleted", deleted });
  } catch (error) {
    res.status(500).json({ success: false, message: "Delete failed" });
  }
};

