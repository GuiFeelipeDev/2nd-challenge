function expand(id)
{
    var itens = document.getElementsByClassName('expanded');
    var itens2 = document.getElementsByClassName('ico');
    var itens3 = document.getElementsByClassName('h2');


    for(var i = 0; i < itens.length; i++)
    {
        if(itens[i].classList.contains('active') && i != id)
        {
            itens[i].classList.remove("active");
            itens2[i].classList.remove("activei");
        }
        
        
    }


    itens[id].classList.toggle("active");
    itens2[id].classList.toggle("activei");
    itens3[id].classList.toggle("bold");
    itens3[id].classList.toggle("h3");
}

/*function expand()
{
    var p = document.getElementById("expanded");
    p.classList.toggle("active");
    var ico = document.getElementById("ico");
    ico.classList.toggle("activei");
}*/