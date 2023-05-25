import React from 'react';

export default function Resume() {

    return (
        <div>
            <div className="resumeTitle">
                <h1>Get to Know Me!</h1>
            </div>
            <div className="resumeBody">
                <div className="resumeContainer">
                    <h2>Download my Resume!</h2>
                    <a href="/resume.pdf" target="_blank" rel="noreferrer">
                        <button className="resumeButton">Click Me!</button>
                    </a>
                </div>
                <div className="skillsContainer">
                <h2>Skills</h2>
                    <p>HTML, CSS, Javascript, ES6, MongoDB, Mongoose ODM, Model-View-Controller, Object-Relation Mapping, Node.js, Express.js, Object-Oreinted Programming, API Development, Progressive Web Applications, React.js</p>
                </div>
            </div>
        </div>
    )
}