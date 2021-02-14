import { combineLatest, of } from "rxjs";
import { pipe, switchMap } from "rxjs/operators";

export default function switchMapExampleWithTwoValues() {
  const ab$ = of("a", "b");
  ab$.pipe(switchMap((val) => of([val, "c"]))).subscribe(console.log);
}
