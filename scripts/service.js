
// Function to verify that the phone number is correct.
// Here, I validate for (12345), but you have to change that for a phone validation
// Tutorials on Regular expressions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions 
// https://flaviocopes.com/javascript-regular-expressions/ 
// Regular expressions can get complex, you can think in terms of a series of characters
// or numbers 
function validatePhone(txtPhone) {
    var a = document.getElementById(txtPhone).value;
    // Logic inspired from https://stackoverflow.com/questions/4338267/validate-phone-number-with-javascript
    var filter =/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

function validateCCNum(num) {
    var a = document.getElementById(num).value;
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
    var filter =/^\d{4}$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}


// Using date restrictions on datepicker
// Document of datepicker is here: https://api.jqueryui.com/datepicker/ 
// The following code shows how to set specific dates to exclude, as well as Sundays (Day 0)
// Make sure in your version that you associate Days to remove with Experts (e.g. John doesn't work Mondays)
//var unavailableDates = ["06/29/2020","07/07/2020","07/10/2020"];
var unavailableDates = [""];
const setDateFormat = "mm/dd/yy";

function disableDates(date) {
	
	var hairdressers = document.getElementsByName('hairdresser');	
	var sel = "";
	for(var i = 0; i < hairdressers.length; i++){
		if(hairdressers[i].checked){
			sel = hairdressers[i].value;
		}
	}
	if(sel == "harry"){
		if (date.getDay() == 1 || date.getDay() == 2 || date.getDay() == 3 || date.getDay() == 4){
			return [false];
		}
	}
	if(sel == "harriet"){
		if (date.getDay() == 5 || date.getDay() == 6){
			return [false];
		}
	}
	if(sel == "harold"){
		return [true];
	}
	
    // Sunday is Day 0, disable all Sundays
    if (date.getDay() == 0)
        return [false];
    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [ unavailableDates.indexOf(string) == -1 ]
}


// HERE, JQuery "LISTENING" starts
$(document).ready(function(){

    // phone validation, it calls validatePhone
    // and also some feedback as an Alert + putting a value in the input that shows the format required
    // the "addClass" will use the class "error" defined in style.css and add it to the phone input
    // The "error" class in style.css defines yellow background and red foreground
    $("#phone").on("change", function(){
        if (!validatePhone("phone")){
            alert("Incorrect phone number format (eg: 123-456-7890)");
            $("#phone").val("");
            $("#phone").addClass("error");
        }
        else {
            $("#phone").removeClass("error");
        }
    });
		$("#ccDig1-4").on("change", function(){
        if (!validateCCNum("ccDig1-4")){
            alert("Incorrect credit card number format (eg: 4231)");
            $("#ccDig1-4").val("");
            $("#ccDig1-4").addClass("error");
        }
        else {
            $("#ccDig1-4").removeClass("error");
        }
    });
	
	$("#ccDig5-8").on("change", function(){
        if (!validateCCNum("ccDig5-8")){
            alert("Incorrect credit card number format (eg: 4231)");
            $("#ccDig5-8").val("");
            $("#ccDig5-8").addClass("error");
        }
        else {
            $("#ccDig5-8").removeClass("error");
        }
    });
	
	$("#ccDig9-12").on("change", function(){
        if (!validateCCNum("ccDig9-12")){
            alert("Incorrect credit card number format (eg: 4231)");
            $("#ccDig9-12").val("");
            $("#ccDig9-12").addClass("error");
        }
        else {
            $("#ccDig9-12").removeClass("error");
        }
    });
	
	$("#ccDig13-16").on("change", function(){
        if (!validateCCNum("ccDig13-16")){
            alert("Incorrect credit card number format (eg: 4231)");
            $("#ccDig13-16").val("");
            $("#ccDig13-16").addClass("error");
        }
        else {
            $("#ccDig13-16").removeClass("error");
        }
    });

    // To change the style of the calender, look in jqueryui.com, under Themes, in the ThemeRoller Gallery 
    // You can try different themes (the names are under the calendars) / This is Excite Bike 
    // To use a different theme you must include its css in your HTML file. 
    // The one I included in my HTML is the Excite Bike, but you can try others

    // Also, here is a good tutorial for playing with the datepicker in https://webkul.com/blog/jquery-datepicker/ 
    // Datepicker is also documented as one of the widgets here: https://api.jqueryui.com/category/widgets/ 
    $( "#dateInput" ).datepicker(
        {
            dateFormat: setDateFormat,
            // no calendar before June 1rst 2020
            minDate: new Date('06/01/2020'),  
            maxDate: '+4M',
            // used to disable some dates
            beforeShowDay: $.datepicker.noWeekends,
            beforeShowDay: disableDates
        }   
    );


    // Look at the different events on which an action can be performed
    // https://www.w3schools.com/jquery/jquery_events.asp
    // Here, we put 
    $("#debit").on("mouseenter", function(){
        $("#debit").addClass("showInput");
    });

    $("#debit").on("mouseleave", function(){
        $("#debit").removeClass("showInput");
    });
  
    // https://jqueryui.com/tooltip/ 
    // The class "highlight" used here is predefined in JQuery UI
    // the message of the tooltip is encoded in the input (in the HTML file)
    $("#debit").tooltip({
        classes: {
          "ui-tooltip": "highlight"
        }
      });
	
});