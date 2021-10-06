import React, { useState, Fragment }from 'react';
import Survey from './Survey';
import './_create_survey.css';

const CreateSurvey = (props) => {
    const [survey,setSurvey] = useState([])
    return (
        <div className="create-survey-container">
            <Survey survey={survey} setSurvey={setSurvey}/>
        </div>
    )
}

export default CreateSurvey;