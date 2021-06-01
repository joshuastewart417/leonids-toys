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

for (const actionfigure of actionfigures) {
    console.log(actionfigure.price)
    console.log(actionfigure.maker)
    console.log(actionfigure.name)
}




