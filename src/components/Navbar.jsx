import React from "react";
import { Link, Outlet } from "react-router-dom";

function Navbar(props) {
    return (
        <div>
            <nav>
                <h2>Todo List</h2>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/create">Create</Link>
                    </li>
                    <li>
                        <Link to="/update">Edit</Link>
                    </li>
                    <li>
                        <Link to="/delete">Delete</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </div>
    );
}

export default Navbar;