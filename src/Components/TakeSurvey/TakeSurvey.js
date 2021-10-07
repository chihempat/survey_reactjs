import React from 'react';
import Survey from './Survey';
import './_create_survey.css';

const TakeSurvey = (props) => {
    const surveys = props.survey;
    console.log(surveys);
    console.log(typeof (surveys));
    if (surveys === undefined) {
        alert('No surveys available');
        return <div>No surveys available</div>;
    }

    Object.keys(surveys).map(function (key, index) {
        console.log(surveys[key])
    });
    // type: 'single', question: 'f', options: Array(1)

    return (surveys && (
        <div className="create-survey-container">
            <form>
                {Object.keys(surveys).map((key, index) => (
                    <div>
                        <h2 className="question-containe">Q{index + 1}. {(surveys[key].question).toString()}</h2>
                        {surveys[key].options.map((option, index) => (
                            <div className="answer-container"><h3><b>{index + 1}.</b> {(option.value ?? '')}<input type={surveys[key].type === "single" ? "radio" : "checkbox"} name="option1" value={option.value ?? " "} /></h3></div>
                        )
                        )}
                    </div>
                ))}
                <button onClick={props.onSubmit}>Submit</button>

            </form>
        </div>)
    )
}

export default TakeSurvey;