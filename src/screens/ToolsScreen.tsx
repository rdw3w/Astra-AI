import React from 'react';
import './ToolsScreen.css';

const ToolsScreen = () => {
    return (
        <div className="tools-screen">
            <h1>Tools & Resources</h1>
            <div className="tool">
                <h2>Battery Saver</h2>
                <p>Use our battery saver feature to optimize your device's power consumption.</p>
                <button>Activate Battery Saver</button>
            </div>
            <div className="tool">
                <h2>Checklists</h2>
                <p>Create, manage, and track your checklists easily.</p>
                <button>Create Checklist</button>
            </div>
            <div className="tool">
                <h2>Resource Tracker</h2>
                <p>Track your resources efficiently and stay organized.</p>
                <button>Open Resource Tracker</button>
            </div>
        </div>
    );
};

export default ToolsScreen;
