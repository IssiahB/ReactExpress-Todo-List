import React, { useState } from "react";

import Template from "./Template";

function DeleteTask(props) {
    let tasks = props.tasks;
    const [taskId, setTaskId] = useState(null);
    const [isError, setIsError] = useState(false);

    function handleTaskChange(event) {
        // Gets the id of the selected option
        // Used when sending a 'put' request to backend
        let optionIndex = event.target.selectedIndex;
        let selectedOption = event.target.options[optionIndex];
        let id = selectedOption.getAttribute('id');

        setTaskId(id);
    }

    function handleDelete(event) {
        event.preventDefault();
        if (taskId == null) { return; }

        async function sendRequest() {
            try {
                let response = await fetch(`http://localhost:5000/tasks/${taskId}`, {
                    method: 'DELETE',
                });

                var reply = await response.json();
            } catch (err) {
                console.log(err);
                setIsError(true);
            }
            if (reply === 'Deleted Successfully') {
                window.location.href = '/';
            } else {
                setIsError(true);
            }
        }
        sendRequest();
    }

    return (
        <Template title="Delete Your Tasks" isError={isError} errorMsg="There was an error deleting you task">
            <form onSubmit={handleDelete}>
                <select defaultValue="Select Task" onChange={handleTaskChange}>
                    <option disabled value="Select Task"> Select Task </option>
                    {tasks.map((task) => (
                        <option key={task._id} id={task._id} value={task.task}>{task.task}</option>
                    ))}
                </select>
                <button type="submit">Delete</button>
            </form>
        </Template>
    )
}

export default DeleteTask;