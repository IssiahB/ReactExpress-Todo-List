import React, { useState } from "react";

function Template(props) {
    const [isError, setIsError] = useState(props.isError);

    return (
        <div className="content">
            <header>
                <h1> {props.title} </h1>
                <p> {isError && props.errorMsg}</p>
            </header>
            <main>
                {props.children}
            </main>
        </div>
    );
}

Template.defaultProps = {
    isError: false
}

export default Template;