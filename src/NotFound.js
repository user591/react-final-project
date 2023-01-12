import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="page">
            <h1 style={{ textAlign: "center" }}>Not Found</h1>
            <button onClick={() => navigate(-1)}>404 Page not found!</button>
        </div>
    );
};

export default NotFound;