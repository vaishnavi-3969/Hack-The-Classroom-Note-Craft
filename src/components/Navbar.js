import React from "react";
import { Link } from "react-router-dom";
import {
    FaBook,
    FaProjectDiagram,
    FaPencilAlt,
    FaBookOpen,
    FaChalkboard,
    FaBoxes,
    FaCheck,
    FaHome,
} from "react-icons/fa";

const Navbar = () => {
    const navbarStyle = {
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        backdropFilter: "blur(8px)",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        height: "60px",
    };

    const iconStyle = {
        fontSize: "24px",
        color: "#333",
    };

    return (
        <div style={navbarStyle}>
            <Link to="/homepage">
                <FaHome style={iconStyle} />
            </Link>
            <Link to="/notebooks">
                <FaBook style={iconStyle} />
            </Link>
            <Link to="/projects">
                <FaProjectDiagram style={iconStyle} />
            </Link>
            <Link to="/diagram">
                <FaPencilAlt style={iconStyle} />
            </Link>
            <Link to="/sticky_notes">
                <FaBookOpen style={iconStyle} />
            </Link>
            <Link to="/whiteboard">
                <FaChalkboard style={iconStyle} />
            </Link>
            <Link to="/notes_template_library">
                <FaBoxes style={iconStyle} />
            </Link>
            <Link to="/todo">
                <FaCheck style={iconStyle} />
            </Link>
        </div>
    );
};

export default Navbar;
