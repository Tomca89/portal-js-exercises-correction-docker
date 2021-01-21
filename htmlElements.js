let cars = ["Boeing77", "Sesna 42", "f-18"]

function ClearArray(){
cars.splice(0, cars.length)
cars.length = 0
}

function ReplaceArray(){
cars[0] = "model-1"
cars[1] = "model-2"
cars[2] = "model-3"
}

cars.forEach(car => {
    console.log(car)
})