import Home from "@/pages/index";
import { useState } from "react";

const OpenInvite = () => {
    const [isValid, setIsValid] = useState(false);

    const handleClick = () => {
        const valid = true;
        if (valid) {
            setIsValid(true);
        } else {
            alert("Invalid access");
        }
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">Open Invite</h1>
        <p className="text-lg mb-4">Name Guest</p>
        <button 
        onClick={handleClick}
        className="bg-dark-500 text-white px-4 py-2 rounded">
            Open Invite
        </button>
        {isValid && <Home/>}
        </div>
    );
}

export default OpenInvite;