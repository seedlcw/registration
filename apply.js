function gotoPage(){
var eType = document.getElementById("applyType");
var eClass = document.getElementById("applyClass");
var applyForm = document.getElementById("formId");
var loc;
var twentyDayForStudent ="https://goo.gl/pTsblb";
var threeDayForStudent ="https://goo.gl/U6tVL1";
var twentyDayForVolunteer ="https://goo.gl/ngtaqA";
var threeDayForVolunteer ="https://goo.gl/gKZunk";
// var twentyDayEg ="https://goo.gl/c8GwbW";
// var threeDayEg ="https://goo.gl/foHBhC";

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