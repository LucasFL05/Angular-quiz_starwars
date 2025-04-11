import { Component } from '@angular/core';
import { QuizComponent } from "../../components/quiz/quiz.component";
import { StartScreenComponent } from "../../components/start-screen/start-screen.component";

@Component({
  selector: 'app-home',
  imports: [QuizComponent, StartScreenComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
