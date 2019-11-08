
function Pizza(typePizza,size){
  this.typePizza = typePizza;
  this.size = size;
}
Pizza.prototype.getPizza=function(){
  return ("Pizza type: "+this.typePizza+", Size of the pizza: "+this.size);
}
Pizza.prototype.totalPrice=function(){
  if(this.typePizza==="Cheese" && this.size==='small'){return 20}
  else if(this.typePizza==="Cheese" && this.size==='medium'){return 30}
  else if(this.typePizza==="Cheese" && this.size==='large'){return 40}
  else if(this.typePizza==="Pepperoni" && this.size==='small'){return 30}
  else if(this.typePizza==="Pepperoni" && this.size==='medium'){return 40}
  else if(this.typePizza==="Pepperoni" && this.size==='large'){return 50}
  else if(this.typePizza==="Artichoke" && this.size==='small'){return 25}
  else if(this.typePizza==="Artichoke" && this.size==='medium'){return 30}
  else if(this.typePizza==="Artichoke" && this.size==='large'){return 35}
  else if(this.typePizza==="Anchovy" && this.size==='small'){return 25}
  else if(this.typePizza==="Anchovy" && this.size==='medium'){return 35}
  else if(this.typePizza==="Anchovy" && this.size==='large'){return 45}
}
function PizzaList(){
  this.list = [];
  this.currentId = 0;
  this.size = 0;
}
PizzaList.prototype.addPizza=function(pizza){
  pizza.id = this.assignId();
  console.log(pizza.getPizza());
  this.list.push(pizza);
  this.size++;
}
PizzaList.prototype.assignId=function(){
  this.currentId+=1;
  return this.currentId;
}
PizzaList.prototype.getSize = function(){
    return this.size; }
PizzaList.prototype.findPizzaById=function(idx){
  for(var i=0; i<this.list.length; i++){
    if(this.list[i].id===idx){
      return this.list[i];
    }
  }
}


var pizzalist = new PizzaList();
$(document).ready(function()
{
  $("#formID").submit(function(event)
  {
    event.preventDefault();
    var inputPizzaToppings = [];
    var index=0;
   $("input:checkbox[name=pizza]:checked").each(function()
    {
        inputPizzaToppings[index] = $(this).val();
        index++;
    });
    var inputSize = $("#sizeID").val();

    for(var idx = 0; idx < inputPizzaToppings.length; idx++){
      pizzalist.addPizza(new Pizza(inputPizzaToppings[idx],inputSize));
    }
    var total_amount = 0;
    for(var index=1; index<=pizzalist.getSize();index++){
      total_amount+=pizzalist.findPizzaById(index).totalPrice();

    }
    //console.log(pizzalist.findPizzaById(2).totalPrice());
    //console.log(pizzalist.findPizzaById(2).getPizza());
    var result = "Total price: $"+total_amount+'\n'
                 +"Number of pizzas: "+pizzalist.getSize()+'\n'
                 +"Size of pizzas: "+inputSize;
    $(".output").text(result);








  });
});
