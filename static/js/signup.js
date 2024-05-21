function savedata(){
    data={
        Password :document.getElementById('passd1').value,
        Cpassword : document.getElementById('passd2').value,
        username : document.getElementById('userN').value,
        email : document.getElementById('email').value,
        is_admin: document.getElementById('_admin').checked};
        var message = document.getElementById('e');
        var mess= document.getElementById('u');
        var mes= document.getElementById('p');
        var m = document.getElementById('m');

        if(data.username=="")
        {
            mess.innerHTML = "Username cannot be empty!";
            return false;
        }
        else
        {
            mess.innerHTML = "";
        }
        if(data.Password=="")
        {
            mes.innerHTML = "Passwword cannot be empty!";
            return false;
        }
        else
        {
            mes.innerHTML = "";
        }
        if(data.Cpassword=="")
        {
            m.innerHTML = "Confirm passwword cannot be empty!";
            return false;
        }
        else
        {
            m.innerHTML=""
        }
        if(data.email=="")
        {
            message.innerHTML = "email cannot be empty!";
            return false;
        }
        else
        {
            message.innerHTML=""
        }

        if(checkEquality())
        {
            let user_record=new Array();
            user_record=JSON.parse(localStorage.getItem("userData"))||[];
    
            for(let i=0;i<user_record.length;i++)
            {
                if(user_record[i].username==data.username)
                {
                    mess.innerHTML = "Choose another username to be uinque";
                    return false;}
                else{
                        message.innerHTML = "";
                    }
                if(user_record[i].email==data.email){
                message.innerHTML = "This email is already exist";
                return false;}
                else{
                    message.innerHTML = "";
                }
                

            }
            user_record.push(data);
            localStorage.setItem('userData',JSON.stringify(user_record));
            
        }

    
}
function checkEquality() {
        Password =document.getElementById('passd1').value;
        Cpassword = document.getElementById('passd2').value;
        var m = document.getElementById('m');

        if (Password !== Cpassword) {
            m.textContent = "Confirm Passwords do not match Password!";
            return false;
        }
        else
        {
            m.textContent = "";
            
            return true;
            
        }
    }
