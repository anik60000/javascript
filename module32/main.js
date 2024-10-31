var input =document.getElementById("input_id")
var button =document.getElementById("btn_id")
var text =document.getElementById("texti_id")

button.onclick=function(){
    text.innerHTML=input.value;
}

var input1=document.getElementById("input1")
var input2=document.getElementById("input2")
var answer=document.querySelector("#answer")
var btn_shuma=document.querySelector("#btn_shuma")

btn_shuma.addEventListener('click',function(){
    answer.innerHTML=parseInt=(input1.value)+parseInt(input2.value);

})
var text1="The best school in the world isnt Digital School";
var resultati=text1.search("/Digital School/")
document.getElementById("result1").innerHTML=resultati;
