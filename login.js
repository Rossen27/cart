function formCheck() {
    var user = document.getElementById("user1").value;
    var pass = document.getElementById("pass1").value;
    console.log(user);
    if (user==="") {
    alert("使用者名稱不得空白");
    return false;}
    console.log(pass);
    if (pass.length < 8) {
    alert("密碼長度不得 < 8");
    return false;
    }
    window.location.href='https://www.townway.com.tw/auth';
    ;
// 密碼確認
$(".tip").hide();
function checkless1(){
var pas1=document.getElementById("pass1").value;
var pas2=document.getElementById("pass2").value;
if(pas1!=pas2&&pas2!="")
$(".tip").show();
else
$(".tip").hide();
}
function checkpass(){
var pas1=document.getElementById("pass1").value;
var pas2=document.getElementById("pass2").value;
if(pas1!=pas2){
$(".tip").show();
}else{
$(".tip").hide();
}
}
function checkpass2(){
var pas3=document.getElementById("pass1").value;
var pas4=document.getElementById("pass2").value;
if(pas3!=pas4){
alert("兩次輸入的密碼不一致!");
return false;
}
}
}
// cookie設定
document.cookie ='username; path=/';
function parseCookie() {
    var cookieObj = {};
    var cookieAry = document.cookie.split(';');
    var cookie;
    
    for (var i=0, l=cookieAry.length; i<l; ++i) {
        cookie = jQuery.trim(cookieAry[i]);
        cookie = cookie.split('=');
        cookieObj[cookie[0]] = cookie[1];
    }
    
    return cookieObj;
}

function getCookieByName(name) {
    var value = parseCookie()[name];
    if (value) {
        value = decodeURIComponent(value);
    }

    return value;
}
// keyup 機制驗證表單
