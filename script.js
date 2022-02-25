$(document).ready(function() {
    $('#reset').click( function() {
        $('#input1').val("");
        $('#input2').val("");
        $('#input3').val("");
        $('#input4').val("");
        $('#date').val("");
        $('input:radio[name=gender]:checked').val("");
        $('#school').val("...");
        $('#department').val("...");
        $('#course').val("...");
    });
    $("#submit").click( function() {
        var name = $('#input1').val();
        var DOB = $('#date').val();
        var gender = $('input:radio[name=gender]:checked').val();
        var email = $('#input2').val();
        var address = $('#input3').val();
        var school = $('#school').val();
        var department = $('#department').val();
        var course = $('#course').val();
        var phone_no = $('#input4').val();
        var name_pattern = '^[a-zA-Z]+$';
        var email_pattern = '^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-z]{2,3}'
        
        if(name == ""){
            alert('please enter your name');

        } else if (!name.match(name_pattern)) {
            alert('only alphabets are allowed in name');

        } else if (DOB == "") {
            alert('please enter your dob');

        } else if (gender == "") {
            alert('please enter your gender');
            
        } else if (email == "") {
            alert('please enter your email');
            
        }  else if (!email.match(email_pattern)) {
            alert('please enter a valid email');
            
        } else if (address == "") {
            alert('please enter your address');
            
        } else if (school == "...") {
            alert('please select you school');
            
        } else if (department == "...") {
            alert('please select your department');
            
        } else if (course == "...") {
            alert('please select your course');
            
        } else if (phone_no == "") {
            alert('please enter your mobile no.');
            
        }  else if (isNaN(phone_no)) {
            alert('only numbers are allowed in phone number');
            
        } else {
            alert('form submitted successfully');

        }
    });
});