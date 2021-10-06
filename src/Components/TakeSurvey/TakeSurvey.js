import React from 'react';
import Survey from './Survey';
import './_create_survey.css';

const TakeSurvey = (props) => {
    const surveys = props.survey;
    console.log(surveys);
    console.log(typeof (surveys));

    Object.keys(surveys).map(function(key, index) {
            console.log(surveys[key])
    });
    // type: 'single', question: 'f', options: Array(1)

    return (
        <div className="create-survey-container">
            <form>
            {Object.keys(surveys).map((key, index) => (
                <div>
                    <h2>Q.{{index},(surveys[key].question).toString()}</h2>
                    {surveys[key].options.map((option,index) => (
                        <h4>{index}.  {(option.value ?? '')}<input type={surveys[key].type === "single"?"radio":"checkbox"}   name="option1" value={option.value ?? " "}/></h4>
                    )
                    )}
                </div>
            ))}
                <button onClick={props.onSubmit}>Submit</button>

            </form>
        </div>
    )
}

export default TakeSurvey;