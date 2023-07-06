//将img标签元素存放在myImage变量中
let myImage = document.querySelector('img');

//给myImage设置鼠标点击事件，点击后调用函数，函数内用if语句实现切换图片的效果，如果当前图片是A，就切换（执行）为B，如果为B，就切换为A
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/theme.png') {
      myImage.setAttribute('src', 'images/firefox2.png');
    } else {
      myImage.setAttribute('src', 'images/theme.png');
    }
}

let myButton = document.querySelector('button'); //将button元素存放在myButton变量中
let myHeading = document.querySelector('h1');

if(!localStorage.getItem('name')) { //如果本地没有文字name，!号是“非”
  setUserName(); //调用函数setUserName
} else {
  let storedName = localStorage.getItem('name'); //将名字赋值并保存到本地
  myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}

myButton.onclick = function() { //点击按钮
  setUserName(); //调用函数setUserName
}

function setUserName() {
  let myName = prompt('请输入你的名字。'); //弹窗输入框
  if (!myName) { //如果输入框myName没有值或为null
    setUserName(); //则调用函数setUserName
  } else {
    localStorage.setItem('name', myName); //将输入的名字myName赋值给name变量，并保存到本地缓存localStorage
    myHeading.textContent = 'Mozilla 酷毙了，' + myName; //输出既定内容+名字 
  }
}







// //这是声明变量，调用h1并赋值为hello world！
// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';

// let myVariable = "张三";
// let iceCream = 'chocolate';



// //这是一个点击事件，当鼠标点击时调用alert提示事件
// document.querySelector("html").addEventListener("click", function () {
//     alert("别戳我，我怕疼。");
//   });
//这是一段if判断语句，alert是弹窗提醒
// if (iceCream === 'chocolate') {
//   alert('我最喜欢巧克力冰激淋了。');
// } else {
//   alert('但是巧克力才是我的最爱呀……');
// }



// //这是函数
// function multiply(num1, num2) {
//     let result = num1 * num2;
//     return result;
//   }
// //这是给函数设置参数，运行函数
//   multiply(4, 7);
//   multiply(20, 20);
//   multiply(0.5, 3);
  
