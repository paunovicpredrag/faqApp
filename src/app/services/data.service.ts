import { Injectable } from '@angular/core';
import { Question } from '../models/Question';

@Injectable()
export class DataService {
  questions:Question[]; 
  constructor() {   
    /* 
    this.questions = [
      {
        text:'What is your name?',
        answer:'My name is brad',
        hide:true
      },
      {
        text:'What is your favorite color?',
        answer:'My favorite color is red',
        hide:true
      },
      {
        text:'What is your favorite language?',
        answer:'My favorite language is serb',
        hide:true
      }
    ];
    */
  }
// get questions from local storage
  getQuestions(){
    if(localStorage.getItem('questions') === null){
      this.questions = [];
    } else {
      this.questions = JSON.parse(localStorage.getItem('questions'));
    }

    return this.questions;
  }

  // add question to local storage
  addQuestion(question:Question){
    this.questions.unshift(question);

    // init local var
    let questions;

    if(localStorage.getItem('questions') === null){
      questions = [];
      // Push new question
      questions.unshift(question);
      // Set new array to Local storage
      localStorage.setItem('questions', JSON.stringify(questions));
    } else {
      questions = JSON.parse(localStorage.getItem('questions'));
      //Add new question
      questions.unshift(question);
      // re set local storage
      localStorage.setItem('questions', JSON.stringify(questions));      
    }
  }

  // remove question from local storage
  removeQuestion(question:Question){
    for(let i = 0;i < this.questions.length;i++){
      if(question == this.questions[i]){
        this.questions.splice(i, 1);
        localStorage.setItem('questions', JSON.stringify(this.questions));
      }
    }
  }

}
