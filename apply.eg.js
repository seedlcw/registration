function gotoPage(){
var eClass = document.getElementById("applyClass");
var applyForm = document.getElementById("formId");
var loc;
var twentyDayEg ="https://goo.gl/c8GwbW";
var threeDayEg ="https://goo.gl/foHBhC";

    if (eClass.value==1) {
        // alert("udn.com")
        loc=threeDayEg;
    // 二十日課
    } else {
        loc=twentyDayEg;
    }
    applyForm.action=loc;
    applyForm.submit();
}