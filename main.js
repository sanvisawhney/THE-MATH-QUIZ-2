function adduser(){
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;

    localStorage.setItem("number 1", number1);
    localStorage.setItem("number 2 ", number2);

    window.location="index_2.html"

}