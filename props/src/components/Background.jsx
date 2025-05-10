import React from "react";

function Background() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden bg-gray-950">
            {/* Blurred Background Blobs */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-tr from-blue-800 via-blue-600 to-white rounded-full filter blur-3xl opacity-30 animate-blob1"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-white via-blue-400 to-blue-800 rounded-full filter blur-2xl opacity-20 animate-blob2"></div>
            <div className="absolute top-1/2 left-2/3 w-60 h-60 bg-gradient-to-tr from-blue-900 via-blue-600 to-white rounded-full filter blur-2xl opacity-25 animate-blob3"></div>
        </div>
    );
}

export default Background;
