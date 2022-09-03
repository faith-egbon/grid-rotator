let arr= [1, 2, 3, 6, 9, 8, 7, 4, 5];

const rotate=document.querySelector(".btnRotate");

rotate.addEventListener("click", myFunc);


function myFunc (){
    let button1= document.getElementById("but1");
    let button2= document.getElementById("but2");
    let button3= document.getElementById("but3");
    let button4= document.getElementById("but4");
    let button5= document.getElementById("but5");
    let button6= document.getElementById("but6");
    let button7= document.getElementById("but7");
    let button8= document.getElementById("but8");
    let button9= document.getElementById("but9");

    let changedValue= arr.splice(arr.length- 2, 1);

    
    arr.unshift(changedValue[0]);

    button1.innerHTML = arr[0];
	button2.innerHTML = arr[1];
	button3.innerHTML = arr[2];
	button4.innerHTML = arr[7];
	button5.innerHTML = arr[8];
	button6.innerHTML = arr[3];
	button7.innerHTML = arr[6];
	button8.innerHTML = arr[5];
	button9.innerHTML = arr[4];

    return arr
}