function reverse() 
{
    var str1 = document.getElementById ("firstStr").value;
    var str1caps = str1.toUpperCase();
    var splitstr1 = str1caps.split("");
    var reverse = splitstr1.reverse();
    var joinstr1 = reverse.join("");

    if (joinstr1 == "MOM") 
        {
            document.getElementById("result").innerHTML = "Come up with your own word!"
        }

   else if (str1caps == joinstr1) 
    {
        document.getElementById("result").innerHTML = "Congratulations This is a Palin!"
    }

    else 
    {
        document.getElementById("result").innerHTML = "Incorrect, This is not a Palin!"
    }
}