import { of } from "rxjs";
import { pipe, switchMap, map } from "rxjs/operators";

export default function switchMapMapExample() {
  of(1)
    .pipe(switchMap((val1) => of(2).pipe(map((val2) => [val1, val2]))))
    .subscribe(console.log);
}
