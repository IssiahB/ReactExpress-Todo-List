import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Home";
import CreateTask from "./CreateTask";
import UpdateTask from "./UpdateTask";
import DeleteTask from "./DeleteTask";


function App() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        async function fetchTasks() { 
            let value = await fetch('http://localhost:5000/tasks');
            let data = await value.json();
            setTasks(data);
        }
        fetchTasks();
    }, []);

    return (
        <div className="container">
            <Navbar />
            <div className="container">
                <Routes>
                    <Route exact path="/" element={<Home tasks={tasks} />} />
                    <Route path="/create" element={<CreateTask />} />
                    <Route path="/update" element={<UpdateTask tasks={tasks} />} />
                    <Route path="/delete" element={<DeleteTask tasks={tasks} />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;