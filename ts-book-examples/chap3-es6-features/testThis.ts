function myFunction() {
    console.log(this)
}

myFunction()
/*
    Object [global] {
    global: [Circular *1],
    clearInterval: [Function: clearInterval],
    clearTimeout: [Function: clearTimeout],
    setInterval: [Function: setInterval],
    setTimeout: [Function: setTimeout] {
      [Symbol(nodejs.util.promisify.custom)]: [Getter]
    },
    queueMicrotask: [Function: queueMicrotask],
    performance: Performance {
      nodeTiming: PerformanceNodeTiming {
        name: 'node',
        entryType: 'node',
        startTime: 0,
        duration: 50.347518999129534,
        nodeStart: 0.2868730016052723,
        v8Start: 1.6032849997282028,
        bootstrapComplete: 37.71788100153208,
        environment: 18.638201002031565,
        loopStart: -1,
        loopExit: -1,
        idleTime: 0
      },
      timeOrigin: 1652390251984.226
    },
    clearImmediate: [Function: clearImmediate],
    setImmediate: [Function: setImmediate] {
      [Symbol(nodejs.util.promisify.custom)]: [Getter]
    }
  }
*/

let test = new myFunction() //myFunction {}