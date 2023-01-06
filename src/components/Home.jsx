import React from "react";

import Template from "./Template";
import "../styles/home.css";

function Home(props) {
    let tasks = props.tasks;

    return (
        <Template title="Your Tasks" isError={false}>
            <ul className="task-container">
                {tasks.map((task) => (
                    <li key={task._id} className="task-item">{task.task}</li>
                ))}
            </ul>
        </Template>
    );
}

export default Home;