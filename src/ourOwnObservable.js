// https://ultimatecourses.com/blog/rxjs-observables-observers-operators

// click the page and view the event
export default function ourOwnObservable() {
  function Observable(subscribe) {
    this.subscribe = subscribe
  }

  Observable.fromEvent = (element, eventType) => {
    return new Observable((observer) => {
      const callback = (event) => observer.next(event)
      element.addEventListener(eventType, callback, false)
      return () => element.removeEventListener(eventType, callback, false)
    })
  }

  Observable.prototype.map = function (mapFn) {
    const el = this
    return new Observable((observer) => {
      return el.subscribe({
        next: (value) => observer.next(mapFn(value)),
        error: (err) => observer.error(err),
        complete: () => observer.complete(),
      })
    })
  }

  const click$ = Observable.fromEvent(document, 'click').map((event) => ({
    ...event,
    hello: 'world',
  }))

  const unsubscribe = click$.subscribe({
    next: (event) => {
      console.log(event)
    },
  })

  setTimeout(unsubscribe, 5000)
}
