// https://ultimatecourses.com/blog/rxjs-observables-observers-operators
function Observable(subscribe) {
  this.subscribe = subscribe
}

Observable.fromEvent = (element, name) => {
  return new Observable((observer) => {
    const callback = (event) => observer.next(event)
    element.addEventListener(name, callback, false)
    return () => element.removeEventListener(name, callback, false)
  })
}
