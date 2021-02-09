import { combineLatest, of } from "rxjs";
import { pipe, switchMap, map } from "rxjs/operators";

export default function switchMapMapExample() {
  of(1)
    .pipe(switchMap((val1) => of([val1, 2])))
    .subscribe(console.log);
}
