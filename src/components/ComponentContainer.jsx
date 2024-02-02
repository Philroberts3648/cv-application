// import React, { useState } from "react";
import styles from '../Styles/ComponentContainer.module.css';

import WorkExperience from "./WorkExperience";
import Educations from "./Education";
import PersonalInfo from "./PersonalInfo";

export default function ComponentContainer() {
    return (
        <div className = {styles.div}>
            <PersonalInfo className = 'personalInfo' />
            <Educations className = 'educations' />
            <WorkExperience className = 'workExperience' />

        </div>
    )
}