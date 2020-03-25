import React, { Component } from "react";
import QuizQuestionButton from './QuizQuestionButton';

class QuizQuestion extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <main>
                <section>
                    <p>
                        {this.props.quiz_question.instruction_text}
                    </p>
                </section>
                <section>
                    {this.props.quiz_question.answer_options.map(index => {
                        return(
                            <QuizQuestionButton key = {index} button_text = {this.props.quiz_question.answer_options[index]}/>
                        )
                    })};
                    {/* <ul>
                        <li>
                            <QuizQuestionButton button_text = {this.props.quiz_question.answer_options[0]}/>
                        </li>
                    </ul> */}
                </section>
            </main>
        );
    }
};

export default QuizQuestion;