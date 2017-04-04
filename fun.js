function gotoPage(){
var eType = document.getElementById("enrollType");
var eClass = document.getElementById("enrollClass");
var enrollForm = document.getElementById("formId");
var loc;
var threeDayForStudent ="";
var threeDayForVolunteer ="";
var twentyDayForStudent ="https://docs.google.com/forms/d/e/1FAIpQLSewBJMv-TFKQnOiiNupjF4GJvJmv-3QtUuC8w7SyyuItQ8ZMg/viewform";
var twentyDayEg ="";
var threeDayEg ="";

// 學生
    if (eType.value==1) {
        // 三日課
        if (eClass.value==1) {
            // alert("udn.com")
            loc="";
        // 二十日課
        } else {
            loc="https://udn.com";
        }
// 法工
    } else {
        // 三日課
        if (eClass.value==1) {
            loc="https://docs.google.com/forms/d/e/1FAIpQLSewBJMv-TFKQnOiiNupjF4GJvJmv-3QtUuC8w7SyyuItQ8ZMg/viewform";
        // 二十日課
        } else {
            loc="https://docs.google.com/forms/d/e/1FAIpQLSewBJMv-TFKQnOiiNupjF4GJvJmv-3QtUuC8w7SyyuItQ8ZMg/viewform";
        }
    }
    enrollForm.action=loc;
    enrollForm.submit();
}