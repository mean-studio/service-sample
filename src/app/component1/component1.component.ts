import { Component, OnInit } from "@angular/core";
import { MyService } from "../service.service";

@Component({
  selector: "app-component1",
  templateUrl: "./component1.component.html",
  styleUrls: ["./component1.component.css"],
})
export class Component1Component implements OnInit {
  constructor(private myService: MyService) {}
  count = 0;
  ngOnInit(): void {
    this.myService.dataBridge.subscribe((data) => {
      this.count = data;
    });
  }
}
