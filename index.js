var angle = 0;
var movement,clicked = 0;


$(".fan-start").click(function(){
  clicked++;
    $(".counter").html(clicked);
  window.movement = setInterval(fanOps,1);
});

$(".fan-stop").click(function(){

    clearInterval(window.movement);
      window.movement--;
      clicked--;
    if(clicked>=0)
    {
        $(".counter").html(clicked);
    }
    else{
      clicked = 0;
    }
});

function fanOps()
{

  if(angle<360)
  {
  angle ++;
  }
  else{
    angle = 0;
  }
    $("img").css("transform","rotate("+angle+"deg)");

}
