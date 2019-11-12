
/* Pizza class with two instance variables. */
function Pizza(type_pizza,size_pizza){
  this.type_pizza = type_pizza;
  this.size_pizza = size_pizza;
}
Pizza.prototype.pizzaProperties=function(){
  if(this.type_pizza==='cheesePizza'){
      return ("Type of pizza: Cheese Pizza, Size of pizza: "+this.size_pizza+'\n')
  }
  else if(this.type_pizza==='pepperoniPizza'){
      return ("Type of pizza: Pepperonni Pizza, Size of pizza: "+this.size_pizza+'\n')
  }
  else if(this.type_pizza==='artichokePizza'){
      return ("Type of pizza: Artichoke Pizza, Size of pizza: "+this.size_pizza+'\n')
  }
  else{
      return " ";
  }
}
Pizza.prototype.prize = function(){
  if(this.type_pizza==='cheesePizza' && this.size_pizza==='small'){return 20;}
  else if(this.type_pizza==='cheesePizza' && this.size_pizza==='medium'){return 30;}
  else if(this.type_pizza==='cheesePizza' && this.size_pizza==='large'){return 40;}
  else if(this.type_pizza==='pepperoniPizza' && this.size_pizza==='small'){return 25;}
  else if(this.type_pizza==='pepperoniPizza' && this.size_pizza==='medium'){return 30;}
  else if(this.type_pizza==='pepperoniPizza' && this.size_pizza==='large'){return 35;}
  else if(this.type_pizza==='artichokePizza' && this.size_pizza==='small'){return 40;}
  else if(this.type_pizza==='artichokePizza' && this.size_pizza==='medium'){return 50;}
  else if(this.type_pizza==='artichokePizza' && this.size_pizza==='large'){return 60;}
}
/**Class ListPizza to store all ordered pizzas */
function ListPizza(){
  this.list = [];
  this.currentID = 0;
}
ListPizza.prototype.addPizza=function(pizza){
  pizza.id = this.assignID();
  this.list.push(pizza);
}
ListPizza.prototype.assignID=function(){
  this.currentID+=1;
  return this.currentID;
}
ListPizza.prototype.findPizzaById=function(idx){
  for(let index=0; index<this.list.length; index++){
      if(this.list[index]){
          if(this.list[index].id===idx){
              return this.list[index];
          }
      }
  }
  return null;

}
ListPizza.prototype.deletePizzaById=function(idx){
  for(let index=0; index<this.list.length; index++){
      if(this.list[index]){
          if(this.list[index].id===idx){
              delete this.list[index];
              return true;
          }
      }
  }
  return false;

}
/*Frontend logic*/ 

let totalAmount = 0;
let output = "";
let listpizza = new ListPizza();
function addOrders(){
  let type_pizza = document.getElementById("pizzaTypeID").value;
  let size_pizza = document.getElementById("sizeID").value;
  //Data validation 
  if((type_pizza==='cheesePizza'|| type_pizza==='pepperoniPizza' || type_pizza==='artichokePizza') && 
  (size_pizza==='small'||size_pizza==='medium'||size_pizza==='large'))
  {
      pizza = new Pizza(type_pizza,size_pizza);
      listpizza.addPizza(pizza);
      
  }
  else
  {
      if(type_pizza==="" && size_pizza==="")
      {
          $("#output").text("Please choose type  and size of the pizza:").fadeIn();
          
      }
      else if((type_pizza=="")&& (size_pizza==='small'||size_pizza==='medium'||size_pizza==='large'))
      {
          $("#output").text("Please choose type of the pizza:").fadeIn();
      }
      else
      {
          $("#output").text("Please choose size of the pizza:").fadeIn();
      }

  }
  

  
  
}

function placeOrder(){

 
  for( let i=1;i<=listpizza.currentID; i++){
      output+=listpizza.findPizzaById(i).pizzaProperties()+", Price is $"+listpizza.findPizzaById(i).prize()+';\n';
      totalAmount+=listpizza.findPizzaById(i).prize();
  }

  $("#output").text(output).fadeIn();
  $("#outputPrice").text(addressAndName()+";  Total Price: $"+totalAmount).show();

  
  
}
function addressAndName(){
  let inputName = document.getElementById("fullNameID").value;
  let inputAddress = document.getElementById("addressID").value;
  return ("Full name: "+inputName+", Address: "+inputAddress);
  
}



