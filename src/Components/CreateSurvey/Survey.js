import React, { useState, Fragment, useRef } from 'react';
import { Route, Switch, useHistory, Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import TakeSurvey from '../TakeSurvey/TakeSurvey';

const Survey = (props) => {
const [surveyType, setSurveyType] = useState('defaultValue');
const [isPublish,setPublish] = useState(false);
const [options, setOptions] = useState([{}]);
const answer = useRef(null);
const question = useRef(null);
let op1 = useRef(null);
let op2 = useRef(null);


	const [survey, setSurvey] = useState([]);

	const publish = () => {
		console.log('publish');
		addQuestion();
		setSurvey((prevState) => {
			return prevState.filter((item) => {
				return (item.question !== undefined || item.question !== '');
			});
		});
		console.log("=======>",survey);

		//naviagte to take survey
		setPublish(true);

	}




    const onAddItem = () => {
        // Approach 1 :
        // const updatedOptions = [...options];
        // updatedOptions.push({value: '', id: Date.now()})
        // setOptions(updatedOptions)

        // Approach 2 :
			if (options.length < 5) {
				let temp = [...options];
				let val = answer.current.value ?? "";
				setOptions((prevState) => {

					return[...prevState, { value: val, id: Date.now() }];
				});
			} else {
				alert('You can not add more than 4 options');
			}
    }

		const onDeleteItem = (id) => {
			const updatedOptions = [...options];
			updatedOptions.splice(id, 1);
			setOptions(updatedOptions);
		}

	const addQuestion = () => {
		let questions = {
			type: surveyType,
			question: question.current?.value || '',
			options: surveyType === "single" ? [{ id: 1, value: (op1.current.value || "Yes") }, { id: 2, value: (op2.current.value || "No") }] : options.splice(1, options.length - 1)
		}
		setSurvey((prev)=>[...prev, questions]);
		setSurveyType('defaultValue');
		setOptions([{}]);
		console.log(survey);

	}

	return (
		<Fragment>
			{isPublish ? <TakeSurvey survey={survey}/> :
				<>
			<div className="question-type-container">
				<select
					name="survey"
					value={surveyType}
					onChange={(evt) => {
						setSurveyType(evt.target.value);
					}}
				>
					<option value="defaultValue">Select question type</option>
					<option value="multi">Multi-select</option>
					<option value="single">Single select</option>
				</select>
			</div>
			{surveyType !== 'defaultValue' && (
				<div className="survey-container">
					<input type="text" placeholder="Enter your question here" className="question-container" ref={question}/>
					{surveyType === 'multi' ? (
						<>
							{options.map((option,index) => (
								<div className="answer-container">
									<input type="text" placeholder="Type answer here" ref={answer} id={index}/>
									<p onClick={onAddItem}>➕</p>
									<p onClick={onDeleteItem}>➖</p>
									<br />
								</div>
							))}
						</>) : (
							<div className="answer-container">
							<input type="text" placeholder="True" ref={op1} /><input type="radio" name="single"/>
							<input type="text" placeholder="False" ref={op2} /><input type="radio" name="single" />
							</div>
					)}
					<button onClick={addQuestion}>Add Question</button>
				</div>
					)}
					{ survey.length !== 0 && <button onClick={publish}>Publish</button>}
					</>
			}

		</Fragment>
	);
};

export default Survey;

// 1. Write a onClick event handler for <p> + </p>
// 2. When + is clicked, you add another option object to the options state.

