import React, { Component } from 'react';
import * as prepareQuestionsFunctions from './functions/prepareQuestionsFunctions.js'
import './CreateQuestions.css';

class CreateQuestions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
            correct: 0,
            incorrect: 0,
            questions: [],
            C_answer: [],
            W_answer: [],
            alertType: '',
            alertMessage: ''
        }
        this.handleSelection = this.handleSelection.bind(this);
    }

    // componentDidUpdate method tends to run infinitely unless we put a condition.
    // In our case, we placed a props condition to stop it from running so we could get the data and work on it.
    // 'this.props.myTracks' carries all tracks of the selected playlist, so each time user makes a new list
    // selection; 'myPlaylist' prop from 'GetPlaylistTracks' component changes. Thus, componentDidUpdate runs again.
    // Lastly, once user completes answering all questions, we manually call this method to shuffle data and setState
    // to defaults.
    async componentDidUpdate(prevProps) {
        if (prevProps.myTracks !== this.props.myTracks) {
            const dataset = await prepareQuestionsFunctions.prepareQuestions(this.props.myTracks);
            const question = dataset.map((o) => o.question);
            const C_answer = dataset.map((o) => o.C_answer);
            const W_answer = dataset.map((o) => o.W_answer);
            // Since data is received async, we decided to get each value separately.
            // Otherwise, below single line code would have worked fine.
            
            // const TRY = dataset.map((o) => [o.W_answer, o.C_answer, o.question]);
            // Usage: dataset[...]

            this.setState({
                questions: question,
                C_answer: C_answer,
                W_answer: W_answer,
                current: 0,
                correct: 0,
                incorrect: 0
            });
        }
    }

    componentDidMount() {
        this.componentDidUpdate(this.props.myTracks);
    }

    handleSelection(checked) {
        if (this.state.C_answer[this.state.current] === checked) {
            this.setState({
                correct: this.state.correct + 1,
                current: this.state.current + 1
            })
        } else {
            this.setState({
                incorrect: this.state.incorrect + 1,
                current: this.state.current + 1
            })
        }
    }

    handleStartover = () => {
        this.componentDidUpdate(this.props.myTracks);
    }

    render() {
        return (
            <div className="col-md-12 CreateQuestions mt-3">
                <Score
                    correct={this.state.correct}
                    incorrect={this.state.incorrect}
                />
                {this.state.current !== 5 ?
                    <QuestionsContainer
                        question={this.state.questions[this.state.current]}
                        C_answer={this.state.C_answer[this.state.current]}
                        W_answer={this.state.W_answer[this.state.current]}
                        onChange={this.handleSelection}
                    />
                    :
                    <Result
                        correct={this.state.correct}
                        handleStartover={this.handleStartover}
                    />
                }
            </div>
        );
    }
}

export default CreateQuestions;

function Score(props) {
    return (
        <div className="col-md-12 CreateQuestions-score-board">
            <span>Correct: <strong>{props.correct}</strong></span>
            <span>Incorrect: <strong>{props.incorrect}</strong></span>
        </div>
    );
}

function QuestionsContainer(props) {
    let rand1 = [];
    let rand2 = [];
    let answers = [props.C_answer, props.W_answer];
    rand1 = Math.floor(Math.random() * answers.length);
    (rand1 === 0) ? rand2 = 1 : rand2 = 0;
    return (
        <>
            <p className="lead">{props.question}</p>
            <div className="form-check-inline">
                <label className="form-check-label" htmlFor="radio1">
                    <input
                        type="radio"
                        className="form-check-input"
                        id="radio1"
                        checked=""
                        onChange={(e) => props.onChange(e.target.value)}
                        value={answers[rand1]}
                    />
                    {answers[rand1]}
                </label>
            </div>
            <div className="form-check-inline">
                <label className="form-check-label" htmlFor="radio2">
                    <input
                        type="radio"
                        className="form-check-input"
                        id="radio2"
                        checked=""
                        onChange={(e) => props.onChange(e.target.value)}
                        value={answers[rand2]}
                    />
                    {answers[rand2]}
                </label>
            </div>
        </>
    );
}

function Result(props) {
    let alert = [];
    if (props.correct < 3) {
        alert = ["alert-danger", "Well, you should listen more!", "😕"];
    } else if (props.correct > 3) {
        alert = ["alert-success", "WOW!! You are a true fan!", "😎"];
    } else {
        alert = ["alert-warning", "Hmm, you were almost there!", "😐"];
    }
    return (
        <div className={'alert ' + alert[0]} role="alert">
            <h2>{alert[1]} <span role="img" aria-label={alert[2]}>{alert[2]}</span></h2>
            <button
                className="btn btn-link btn-start-over"
                onClick={() => props.handleStartover()}
            >
                start over?
            </button>
        </div>
    );
}