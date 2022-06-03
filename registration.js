function process()
{
    document.getElementById("namewarning").innerHTML="";
    document.getElementById("surnamewarning").innerHTML="";
    document.getElementById("emailwarning").innerHTML="";
    document.getElementById("passwordwarning").innerHTML="";
    document.getElementById("birthdaywarning").innerHTML="";

    var rule = rule = /.+@.+\.+./;
    var mail = document.getElementById("email").value; 

    var rule2 = /^[ a-zA-Z\-\’]+$/;
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;

    var rule3 = /^(?=.*\d)(?=.*[A-Z]).{6,15}$/;
    var password = document.getElementById("password").value;

    if(document.getElementById("name").value=="")
    {
        document.getElementById("namewarning").innerHTML="*Cannot be blank";
        alert("*Name cannot be blank");
    }
    else if(!rule2.test(name))
    {
        document.getElementById("namewarning").innerHTML="*Invalid Name given";
        alert('*Invalid Name given, Name field should be text');
    }

    if(document.getElementById("surname").value=="")
    {
        document.getElementById("surnamewarning").innerHTML="*Cannot be blank";
        alert("*Surname cannot be blank");
    }
    else if(!rule2.test(surname))
    {
        document.getElementById("surnamewarning").innerHTML="*Invalid Surname given";
        alert('*Invalid Surname given, Surname field should be text');
    } 

    if(document.getElementById("birthday").value=="")
    {
        document.getElementById("birthdaywarning").innerHTML="*Cannot be blank";
        alert("*Date of Birth cannot be blank");
    }
    else
    {
        validatedate();
    }

    if(document.getElementById("email").value=="")
    {
        document.getElementById("emailwarning").innerHTML="*Cannot be blank";
        alert("*E-mail cannot be blank");
    }
    else if(!rule.test(mail))
    {
        document.getElementById("emailwarning").innerHTML="*Invalid E-mail given";
        alert("*Invalid E-mail given");
    }

    if(document.getElementById("password").value=="")
    {
        document.getElementById("passwordwarning").innerHTML="*Cannot be blank";
        alert("*Password cannot be blank");
    }
    else if(!rule3.test(password))
    {
        document.getElementById("passwordwarning").innerHTML="*Invalid Password given";
        alert("*Invalid Password given, should be at least 6 and at most 15 characters long which should contain at least one uppercase letter, one numeric digit, and one special character");
    }

    if(document.getElementById("namewarning").innerHTML=="" &&
    document.getElementById("surnamewarning").innerHTML=="" &&
    document.getElementById("emailwarning").innerHTML=="" &&
    document.getElementById("passwordwarning").innerHTML=="" &&
    document.getElementById("birthdaywarning").innerHTML=="")
    {
        window.location.assign("calculator.html");
    }

}

function validatedate()
{
    var date = document.getElementById("birthday");
    if (date)
    {
        try
        {
            var errorMessage = "";                         
            var splitComponents = date.value.split('/');
            if (splitComponents.length > 0)
            {
                var day = parseInt(splitComponents[0]);
                var month = parseInt(splitComponents[1]);
                var year = parseInt(splitComponents[2]);

                if (isNaN(day) || isNaN(month) || isNaN(year))
                {
                    errorMessage = "The day, month and year need to be numbers";
                    document.getElementById("birthdaywarning").innerHTML="*Invalid Date of Birth given";
                    alert(errorMessage);
                    return false;
                }

                if (day <= 0 || month <= 0 || year <= 0)
                {
                    errorMessage = "The day, month and year need to be positive values greater than 0";
                    document.getElementById("birthdaywarning").innerHTML="*Invalid Date of Birth given";
                }

                if (month > 12)
                {
                    errorMessage = "The month cannot be greater than 12";
                    document.getElementById("birthdaywarning").innerHTML="*Invalid Date of Birth given";
                }

                if (errorMessage == "")
                {
                    var daysPerMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                    if (year % 4 == 0)
                    {
                        daysPerMonth[1] = 29;
                    }
                    if (day > daysPerMonth[month - 1])
                    {
                        errorMessage = "Number of days are more than those allowed for the month";
                        document.getElementById("birthdaywarning").innerHTML="*Invalid Date of Birth given";
                    }
                    if (year >2020)
                    {
                        errorMessage = "The year cannot be greater than 2020";
                        document.getElementById("birthdaywarning").innerHTML="*Invalid Date of Birth given";
                    }
                    if (year <1900)
                    {
                        errorMessage = "The year cannot be less than 1900";
                        document.getElementById("birthdaywarning").innerHTML="*Invalid Date of Birth given";
                    }
                }
            }
            else
            {
                errorMessage = "Please enter the date in dd/mm/yyyy format";
                document.getElementById("birthdaywarning").innerHTML="*Invalid Date of Birth given";
            }

            if (errorMessage)
            {
                alert(errorMessage);
                return false;
            }
        }
        catch (e)
        {
            alert(e);
            return false;
        }
    }
    return true;
}

function resetform()
{
    alert("The form will be reset");
    document.getElementById("namewarning").innerHTML="";
    document.getElementById("surnamewarning").innerHTML="";
    document.getElementById("emailwarning").innerHTML="";
    document.getElementById("passwordwarning").innerHTML="";
    document.getElementById("birthdaywarning").innerHTML="";
    document.form1.reset();
}