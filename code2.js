//using the variable ordercount and giving it a value of 0
let orderCount = (0);
//below the function takeOrder, with two parameters topping and crustType
const takeOrder = (topping, crustType) => {
  orderCount++; //within the function: every time a order is being made the value of ordercount + 1
  console.log('Order: ' + crustType + ' pizza topped with ' + topping); //using console.log displaying the order and the values are below
};

const getSubTotal = (orderCount)=> { //a new function named getSubTotal, with one parameter itemCount
    return orderCount * 7.5; //because there are three orders, given within the function above, times 7.5 (price of pizza) is the total of the bill
}

takeOrder('mushroom, peppers and pepperoni', 'thin crust');//value of the parameters
takeOrder('spinach', 'whole wheat');//value of the parameters
takeOrder('pepperoni', 'brooklyn style');//value of the parameters

console.log(getSubTotal(orderCount));//given the price from the function getSubTotal