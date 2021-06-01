const actionfigures = [
{
    id:1,
    name:"Megatron",
    maker:"Hasbro",
    price:20,
    weight:1.8
},
{
    id:2,
    name:"Tommy",
    maker:"Bandai",
    price:16,
    weight:1.2
},
{
    id:3,
    name:"Cheetara",
    maker:"Bandai",
    price:17,
    weight:1.3
}
]

//define a new toy

const farquad = {
    id:4,
    name:"Farquad",
    maker:"Dreamworks",
    price:99,
    weight:5.4
}
actionfigures.push(farquad)

const shrek = {
    id:5,
    name:"Shrek",
    maker:"Dreamworks",
    price:69,
    weight:30
}
actionfigures.push(shrek)


for (const actionfigure of actionfigures) {
    console.log(`The ${actionfigure.name} action figure by maker ${actionfigure.maker} costs ${actionfigure.price} dollars and weighs ${actionfigure.weight} ounces`)
}




