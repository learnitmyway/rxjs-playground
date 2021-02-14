import { combineLatest, of } from "rxjs";
import { pipe } from "rxjs/operators";

export default function combineLatestExample() {
  const ab$ = of("a", "b");
  const cd$ = of("c", "d");
  combineLatest([ab$, cd$]).subscribe(console.log);
}
