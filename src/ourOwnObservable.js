// https://ultimatecourses.com/blog/rxjs-observables-observers-operators

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

  const click$ = Observable.fromEvent(document, 'click')

  const unsubscribe = click$.subscribe({
    next: (event) => {
      console.log(event)
    },
  })

  setTimeout(unsubscribe, 2000)
}
