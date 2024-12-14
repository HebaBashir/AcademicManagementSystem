// src/components/TimetableSlot.js

import React from 'react';

const TimetableSlot = ({ time, subjects, onSubjectChange }) => {
    return (
        <div className="timetable-slot">
            <span>{time}</span>
            <select onChange={(e) => onSubjectChange(time, e.target.value)}>
                <option value="">Select Subject</option>
                {subjects.map((subject) => (
                    <option key={subject.id} value={subject.id}>
                        {subject.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default TimetableSlot;
