
console.log("Linked Up");


var i = 1;
function func()
{
  var message = "Web Icons Set";
  ( i <= message.length )
  {

    var txt = message.substring(0,i);
    document.getElementById("title").innerHTML = txt;
    setTimeout("func()",200);
    i++;

  }

}

func();
