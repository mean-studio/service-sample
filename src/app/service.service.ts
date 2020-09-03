import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class MyService {
  dataBridge: Subject<any> = new Subject();
  setCount(value) {
    this.dataBridge.next(value);
  }
}
