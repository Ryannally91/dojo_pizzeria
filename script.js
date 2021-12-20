


// _submit is id name of submit button

console.log(_submit)

_submit.addEventListener('click', function (event) {
    event.preventDefault()

    console.log(crust.value, sauce.value, cheese.value)
    console.log(pizzaOven(crust.value, sauce.value, cheese.value, toppings.value ))
    pizzaOven(crust.value, sauce.value, cheese.value, toppings.value )
   //display is id of div to display this info
    display.innerHTML = `<p>you ordered a pizza with ${pizza.crustType}, ${pizza.sauceType} </p> `
        
    })

function pizzaOven(crustV, sauceV, cheeseV, toppingsV){
    let pizza={}
    pizza.crustType= crustV;
    pizza.sauceType = sauceV;
    pizza.cheese = cheeseV;
    pizza.toppings = toppingsV;
    return pizza;
}
// console.log(pizzaOven('crispy', 'tomatoe', 'chese', 'pepperoni'))
