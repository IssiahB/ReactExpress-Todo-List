import React, { useState } from "react";

import Template from "./Template";

function CreateTask(props) {
    const [task, setTask] = useState("");
    const [isError, setIsError] = useState(false);
    const handleChange = (event) => setTask(event.target.value);

    function handleCreate(event) {
        event.preventDefault();
        let taskData = JSON.stringify({
            task: task
        });

        async function sendData() {
            try {
                let response = await fetch('http://localhost:5000/tasks/create', {
                    method: 'POST',
                    body: taskData,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                var reply = await response.json();
            } catch (err) {
                console.log(err);
                setIsError(true);
                setTask("");
            }
            if (reply === 'Created Successfully') {
                window.location.href = '/';
            } else {
                setIsError(true);
                setTask("");
            }
        }
        sendData();
    }

    return (
        <Template title="Create A Task" isError={isError} errorMsg="There Was An Error Creating Task">
            <form onSubmit={handleCreate}>
                <input type="text"
                    placeholder="Enter Task"
                    value={task}
                    onChange={handleChange}
                    autoComplete="false"
                    required
                />
                <button type="submit">Create</button>
            </form>
        </Template>
    )
}

export default CreateTask;