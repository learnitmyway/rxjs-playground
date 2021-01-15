import { fromEvent, of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { delay, mergeMap, switchMap } from "rxjs/operators";

// a switchMap only logs the last saved location, whereas a mergeMap logs all saved locations
export default function mergeMapExample() {
  // faking network request for save
  const saveLocation = (location) => {
    console.log("saveLocation", location);
    return of(location).pipe(delay(500));
  };
  // streams
  const click$ = fromEvent(document, "click");

  click$
    .pipe(
      mergeMap((e) => {
        return saveLocation({
          x: e.clientX,
          y: e.clientY,
          timestamp: Date.now(),
        });
      })
    )
    // Saved! {x: 98, y: 170, ...}
    .subscribe((r) => console.log("Saved!", r));
}
