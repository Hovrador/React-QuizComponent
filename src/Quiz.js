import React, { Component } from 'react';

let quizData = require('./quiz_data.json');

class Quiz extends Component{
    constructor(props){
        super(props);
        this.state = {quiz_position: 1}
    }
    render(){
        return(
            <div>        
                {
                    quizData.quiz_questions.map((question, i) =>{
                        return(
                            <div className = 'QuizQuestion' key = {i}>{question.instruction_text}</div>
                        );
                    })  
                }
            </div>
        );
    }
};

export default Quiz;