function gotoPage(){
var eType = document.getElementById("applyType");
var eClass = document.getElementById("applyClass");
var applyForm = document.getElementById("formId");
var loc;
var threeDayForStudent ="https://udn.com";
var twentyDayForStudent ="https://docs.google.com/forms/d/e/1FAIpQLSewBJMv-TFKQnOiiNupjF4GJvJmv-3QtUuC8w7SyyuItQ8ZMg/viewform";
var threeDayForVolunteer ="https://www.facebook.com/";
var twentyDayForVolunteer ="https://www.youtube.com/";
// var twentyDayEg ="";
// var threeDayEg ="";

// 學生
    if (eType.value==1) {
        // 三日課
        if (eClass.value==1) {
            // alert("udn.com")
            loc=threeDayForStudent;
        // 二十日課
        } else {
            loc=twentyDayForStudent;
        }
// 法工
    } else {
        // 三日課
        if (eClass.value==1) {
            loc=threeDayForVolunteer;
        // 二十日課
        } else {
            loc=twentyDayForVolunteer;
        }
    }
    applyForm.action=loc;
    applyForm.submit();
}