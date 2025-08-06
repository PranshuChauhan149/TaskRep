import axios from "axios";
import { useEffect } from "react";
import { createContext, use, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const serverUrl = "http://localhost:3000";
  const [user, setUser] = useState(null);
  const { id } = useParams();
  const [tasks, setTasks] = useState([]);
  const [update, setUpdate] = useState(null);
  const [getCurrentUser, setGetCurrentUser] = useState(null);

  const getcurrent = async () => {
    try {
      const res = axios.get("/api/auth/current", { withCredentials: true });
    
    } catch (error) {
      toast.error("current error");
    }
  };

  const fetchTasks = async () => {
    try {
      const res = await axios.get(`${serverUrl}/api/task/all-tasks`, {
        withCredentials: true,
      });
      if (res) {
        setTasks(res.data.tasks); // ✅ Correct
      }
    } catch (error) {
      toast.error("Not fetch data");
    }
  };

  const updateComp = async (id) => {
    try {
      const res = await axios.put(
        `${serverUrl}/api/task/complete/${id}`,
        {},
        { withCredentials: true }
      );
      if (res.data.success) {
        await fetchTasks(); // refresh tasks
        toast.success("Task marked as completed");
      } else {
        toast.error("Failed to update task");
      }
    } catch (error) {
      toast.error("Error updating task");
    }
  };
  const deleteELe = async (id) => {
    try {
      const res = await axios.delete(
        `${serverUrl}/api/task/delete/${id}`,
        {},
        { withCredentials: true }
      );
      if (res.data.success) {
        await fetchTasks(); // refresh tasks
        toast.success("Task deleted");
      } else {
        toast.error("Failed to deleted task");
      }
    } catch (error) {
      toast.error("Error de task");
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [user]);

  return (
    <AppContext.Provider
      value={{
        tasks,
        serverUrl,
        user,
        setUser,
        updateComp,
        deleteELe,
        getcurrent,
        fetchTasks
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
