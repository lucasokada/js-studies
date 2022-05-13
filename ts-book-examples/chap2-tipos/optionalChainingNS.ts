namespace OptionalChainingNS {
    interface Wheels {
        count?: number
    }

    interface Vehicle {
        wheels?: Wheels
    }

    class Automobile implements Vehicle {
        constructor(public wheels?: Wheels) {}
    }

    const car: Automobile | null = new Automobile({
        count: undefined
    })

    console.log("car ", car) //car  Automobile { wheels: { count: undefined } }
    console.log("wheels ", car?.wheels) //wheels  { count: undefined }
    console.log("count ", car?.wheels?.count) //count  undefined    

    const count = !car ? 0
        : !car.wheels ? 0
        : !car.wheels?.count ? 0
        : car.wheels.count;

    const val1 = undefined
    const val2 = 10
    const result = val1 ?? val2
    console.log(result) //10


}