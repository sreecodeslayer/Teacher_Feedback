function testRadios()
{
    var r = document.getElementsByClassName("css-checkbox");

    for (var i = 0; i < r.length; i++)
        if ((r[i].type == "radio")&&(r[i].checked != "checked"))
        {
            alert("PLEASE FILL UP FULLY");
            return false;
        }
    return true;
}