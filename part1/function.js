function orderTea(teaType){
    function confirmOrder(){
        return `Order confirmed for ${teaType}`;
    }
    return confirmOrder();
}
let order=orderTea("chai");
//console.log(order);

const calculateTotal= (price,quantity)=>{
    return price*quantity;
}

let totalCost=calculateTotal(400,10);
console.log(totalCost);