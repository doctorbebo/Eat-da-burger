console.log('test')

$(".devour-btn").on('click', (obj)=>
{
    console.log(obj.target.name + obj.target.value);

    devouredState = 
    {
        state: true 
    }

    $.ajax("/api/burger/" + obj.target.value, {
        type: "PUT",
        data: devouredState
      }).then(
        function() {
          console.log("changed devoured state to", devouredState);
          // Reload the page to get the updated list
          location.reload();
        }
      );

});

$(".create-btn").on('click', (obj)=>
{
    burgerName = obj.target.previousElementSibling.previousElementSibling.value;
    $.ajax("/api/new/burger/" + burgerName, {
        type: "POST"
      }).then(
        function() {
          console.log(`${burgerName} created`);
          // Reload the page to get the updated list
          location.reload();
        }
      );

});