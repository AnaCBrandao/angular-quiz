import { Component, OnInit } from '@angular/core';

import quiz_questions from '../../../assets/data/quiz_questions.json';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  
  title: string ="";

  questions:any 
  questionSelected: any

  answers:string[] = [];
  asnwerSelected: string = "";

  questionIndex:number = 0;
  questionMaxIndex:number = 0;

  finished:boolean = false;

  constructor() { }

  ngOnInit(): void {
    if(quiz_questions){
      this.finished = false;
      this.title = quiz_questions.title;

      this.questions = quiz_questions.questions;
      this.questionSelected = this.questions[this.questionIndex];

      this.questionIndex = 0;
      this.questionMaxIndex = this.questions.length;
    }
  }

  playerChoose(value:string){
    this.answers.push(value);

    //console.log(value);
  }

  async nextStep(){
    this.questionIndex+=1;

    if(this.questionMaxIndex > this.questionIndex){
      this.questionSelected = this.questions[this.questionIndex];
    }else{
      this.finished = true;
    }
  }

}
