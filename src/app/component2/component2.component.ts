import { Component, OnInit } from "@angular/core";
import { MyService } from "../service.service";

@Component({
  selector: "app-component2",
  templateUrl: "./component2.component.html",
  styleUrls: ["./component2.component.css"],
})
export class Component2Component implements OnInit {
  count = 0;
  constructor(private myService: MyService) {}
  increaseCount() {
    this.myService.setCount(this.count++);
  }
  ngOnInit(): void {}
}
