import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "ngFor-addition";
  displaySecret = false;
  clickArray = [];

  onDisplaySecret() {
    this.displaySecret = !this.displaySecret;
    this.clickArray.push(new Date());
  }
}
