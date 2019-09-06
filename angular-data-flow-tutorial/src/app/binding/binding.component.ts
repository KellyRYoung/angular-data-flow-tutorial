import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";

@Component({
  selector: "app-binding",
  templateUrl: "./binding.component.html",
  styleUrls: ["./binding.component.scss"]
})
export class BindingComponent implements OnInit {
  userInput: string;
  userInput2: string;
  private _userInput3: string;
  @ViewChild('usernameRef', { static: false }) usernameElementRef: ElementRef;

  constructor() { }

  ngOnInit() { }

  focusOnUsername() {
    this.usernameElementRef.nativeElement.focus();
  }

  clickEventExample = () => {
    alert("You just triggered the click event.");
  }

  secretWord(updatedValue) {
    this.userInput2 = updatedValue;
    if (updatedValue === "chinchilla") {
      alert("You typed the secret word!")
    }
  }

  get userInput3(): string {
    return this._userInput3;
  }

  set userInput3(value: string) {
    this._userInput3 = value;
    if (value === "knock knock") {
      alert("Who's there?");
    }
  }
}
