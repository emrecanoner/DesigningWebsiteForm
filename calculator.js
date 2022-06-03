window.onload = function()
{
    let parts = document.getElementsByTagName("button");
    let screen = document.getElementsByClassName("screen")[0];
    let calculate = document.getElementById("calculate");
    let clear = document.getElementById("clear");

    for(var i =0; i<18; i++)
    {
        if(i!=15 && i!=16 && i!=17)
        {
            parts[i].addEventListener("click", print);
        }
    }

    function print() 
    {
        screen.value+=this.value;
    }

    calculate.addEventListener("click", calculater);

    function calculater()
    {
        screen.value = eval(screen.value);
    }

    clear.addEventListener("click", cleartext);

    function cleartext()
    {
        screen.value="";
    }
}

function reverseNum()
{
    var num = document.getElementById("result").value;
    var x = parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num);
    document.getElementById("result").value = x;
}


