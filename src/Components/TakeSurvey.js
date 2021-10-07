import React from 'react';
import Survey from './Survey';
import './styles.css';

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
                    <div key={index} class="main-container">
                        <h2 className="question-container-2">Q{index + 1}. {(surveys[key].question).toString()}</h2>
                        {surveys[key].options.map((option, index) => (
                            <div className="answer-container-2" key={index}>
                                    <span>{index + 1}.     {(option.value ?? '')} </span>
                                        <input type={surveys[key].type === "single" ? "radio" : "checkbox"}
                                    name="option1" value={option.value ?? " "} id={ index+1 } />
                            </div>
                        )
                        )}
                    </div>
                ))}
                <button class="btn-action" onClick={props.onSubmit}>Submit</button>

            </form>
        </div>)
    )
}

export default TakeSurvey;