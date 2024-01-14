import { Component } from 'react'
import './QuizComponent.css'
import React from 'react'
import data from './resources/quizQuestion.json'

export default class QuizComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentQuestion: 0,
      score: 0,
      style:{visibility:'visible'}
    }
  }
  
  render() {
    const previousQuestion = ()=>{
    if (this.state.currentQuestion>0){  
      this.setState({
        currentQuestion: this.state.currentQuestion - 1
      })}
    }
    const nextQuestion = ()=>{
    if (this.state.currentQuestion<14){  
      this.setState({
        currentQuestion: this.state.currentQuestion + 1
      })}
    }
    const quitQuiz = ()=>{
      if(confirm("Do you want to exit")){
        // this.setState({
        //   style:{visibility : 'hidden'}
        // })
      }
    }
    return (
      <div id="question-container" style={this.state.style}>
        <h2>Question</h2>
        <h4 id="Ques-Num">{this.state.currentQuestion+1} of 15</h4>
        <h3>{data[this.state.currentQuestion].question}</h3>
        <div id="options">
          <div id='option-1'>
            <button>{data[this.state.currentQuestion].optionA}</button>
            <button>{data[this.state.currentQuestion].optionB}</button>
          </div>
          <div id='option-2'>
            <button>{data[this.state.currentQuestion].optionC}</button>
            <button>{data[this.state.currentQuestion].optionD}</button>
          </div>
        </div>
        <div id='Control'>
            <button id='previous' onClick={previousQuestion}>Previous</button>
            <button id='next' onClick={nextQuestion}>Next</button>
            <button id='quit' onClick={quitQuiz}>Quit</button>
        </div>
      </div>
    )
  }
}
