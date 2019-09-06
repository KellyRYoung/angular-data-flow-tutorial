import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-binding",
  templateUrl: "./binding.component.html",
  styleUrls: ["./binding.component.scss"]
})
export class BindingComponent implements OnInit {
  userInput: string;
  userInput2: string;

  constructor() { }

  ngOnInit() { }

  clickEventExample = () => {
    alert("You just triggered the click event.");
  }
  secretWord(updatedValue) {
    this.userInput2 = updatedValue;
    if (updatedValue === "chinchilla") {
      alert("You typed the secret word!")
    }
  }
}
