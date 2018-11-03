function show()
{
        fname = document.getElementById('name').value;
        mname = document.getElementById('mname').value;
        lname = document.getElementById('lname').value;
        dob = document.getElementById('bday').value;

        document.getElementById("details").innerHTML = "Name: "+fname +"<br>Middle Name: "+mname+ "<br>Last Name: "+lname+"<br>Birthday: "+dob;

}      
