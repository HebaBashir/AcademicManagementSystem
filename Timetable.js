// src/components/Timetable.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';

const Timetable = ({ userType }) => {
    const [subjects, setSubjects] = useState([]);
    
    // Sample slots configuration for grid layout
    const layout = [
        { i: 'monday-9am', x: 0, y: 0, w: 1, h: 1 },
        { i: 'monday-10am', x: 0, y: 1, w: 1, h: 1 },
        // Add more slots as needed
    ];

    useEffect(() => {
        const fetchSubjects = async () => {
            const response = await axios.get('http://localhost:5000/subjects'); // Adjust URL as needed
            setSubjects(response.data);
        };

        fetchSubjects();
    }, []);

    return (
        <div className="timetable">
            <h2>{userType.charAt(0).toUpperCase() + userType.slice(1)} Timetable</h2>
            <GridLayout className="layout" layout={layout} cols={1} rowHeight={100} width={300}>
                {layout.map(slot => (
                    <div key={slot.i} className="timetable-slot">
                        <div>{slot.i.replace('-', ' ')}</div>
                        <select>
                            <option value="">Select Subject</option>
                            {subjects.map(subject => (
                                <option key={subject.id} value={subject.id}>
                                    {subject.name}
                                </option>
                            ))}
                        </select>
                    </div>
                ))}
            </GridLayout>
        </div>
    );
};

export default Timetable;
