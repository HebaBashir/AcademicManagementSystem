// src/App.js

import React from 'react';
import Timetable from './components/Timetable';
import './index.css'; // Ensure styles are imported

const App = () => {
    return (
        <div className="App">
            <div className="header">
                <h1>Timetable Management System</h1>
            </div>
            <div className="timetable-container">
                <Timetable userType="student" />
                <Timetable userType="faculty" />
            </div>
            <footer style={{ textAlign: 'center', marginTop: '20px' }}>
                <p>&copy; {new Date().getFullYear()} Timetable Management System</p>
            </footer>
        </div>
    );
};

export default App;

