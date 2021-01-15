import { fromEvent, interval } from 'rxjs'
import { concatMap, take } from 'rxjs/operators'

// click the page to see it log every second for 4 seconds
// Results in the following:
// (results are not concurrent)
// For every click on the "document" it will emit values 0 to 3 spaced
// on a 1000ms interval
// one click = 1000ms-> 0 -1000ms-> 1 -1000ms-> 2 -1000ms-> 3
export default function concatMapExample() {
  const clicks = fromEvent(document, 'click')
  const result = clicks.pipe(concatMap((ev) => interval(1000).pipe(take(4))))
  const subscribe = result.subscribe((x) => console.log(x))
  setTimeout(() => {
    subscribe.unsubscribe()
  }, 6000)
}
