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
    console.log(inputSize);





  });
});
