$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();

    $("* .phone-mask").mask("+7 (999) 999 - 99 - 99");

});


//Валидация E-Mail
function validateEmail(email) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,10})$/;

    if(reg.test(email) == false) {
        return false;
    }else{
        return true;
    }
}

// проверка существования функции
function isFunction(functionToCheck)  {
    functionToCheck = window[functionToCheck];
    var getType = {};
    return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

// подмена url налету
function setLocation(curLoc){
    try {
        history.pushState(null, null, curLoc);
        return;
    } catch(e) {}
    location.hash = '#' + curLoc;
}

function check_amount(val){
    if(val > 99) val = 99;
    return val;
}
