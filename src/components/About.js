import React from 'react';
import profileImage from '../profile-img/17-Aaron Dreyer.jpg';

export default function About() {
    return (
        <div className="aboutContainer">
            <h1>Full Stack Software Developer</h1>
            <img src={profileImage} className="picture" alt="Aaron"/>
            <p>My name is Aaron Dreyer. I am an aspiring Back End Engineer that is currently taking the Georgia Tech Coding Bootcamp to make that happen! I went to North Carolina State University and majored in Textile Technology. I graduated in 2021 and within 2 months I moved down to Atlanta for a job. I currently work as a Polymer and Color Chemist at a topcoat/paste manufacturer for the textile industry.I decided I wanted to move into Computer Science after purchasing a 3D printer. I realized how much computational design went into making the machine as well as operating to create different designs. This led me to dive into coding and programming and make the decision to switch. I am eager to learn as much as I can and find what I am proficient at and what I will enjoy doing as a career. I want to become a back end engineer but we will see what suits me best!</p>
        </div>
    )
}