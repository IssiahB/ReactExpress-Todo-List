import React, { useState } from "react";

import Template from "./Template";

function UpdateTask(props) {
    let tasks = props.tasks;
    const [taskId, setTaskId] = useState(null);
    const [inputValue, setInputValue] = useState("");
    const [isError, setIsError] = useState(false);

    const handleInputChange = (event) => setInputValue(event.target.value);

    function handleTaskChange(event) {
        // Gets the id of the selected option
        // Used when sending a 'put' request to backend
        let optionIndex = event.target.selectedIndex;
        let selectedOption = event.target.options[optionIndex];
        let id = selectedOption.getAttribute('id');

        setInputValue(event.target.value);
        setTaskId(id);
    }

    function handleUpdate(event) {
        event.preventDefault();
        if (taskId == null) { return; }

        let updatedTaskData = JSON.stringify({
            task: inputValue
        });

        async function sendUpdate() {
            try {
                let response = await fetch(`http://localhost:5000/tasks/${taskId}`, {
                    method: 'PUT',
                    body: updatedTaskData,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                var reply = await response.json();
            } catch (err) {
                console.log(err);
                setIsError(true);
            }
            if (reply === 'Updated Successfully') {
                window.location.href = '/';
            } else {
                setIsError(true);
            }
        }
        sendUpdate();
    }

    return (
        <Template title="Edit Your Tasks" isError={isError} errorMsg="There was an error updating your task">
            <form onSubmit={handleUpdate}>
                <select defaultValue="Select Task" onChange={handleTaskChange}>
                    <option disabled value="Select Task"> Select Task </option>
                    {tasks.map((task) => (
                        <option key={task._id} id={task._id} value={task.task}>{task.task}</option>
                    ))}
                </select>
                <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Edit Task" />
                <button type="submit">Change</button>
            </form>
        </Template>
    )
}

export default UpdateTask;