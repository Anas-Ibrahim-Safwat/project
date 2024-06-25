
function check_email(){
    var email= document.getElementById('email').value;
    $.ajax({
        url:'/check_user_exists/',
        type:'get',
        data:{email:email},
        success:function(data){
            if(data.status==0){
            alert(JSON.stringify(data.message));
            document.getElementById('submit-btn').disabled = false;}
            else{
            alert(JSON.stringify(data.message));
            document.getElementById('submit-btn').disabled = true;}
        }
    })
    }
    function check_pass(){
    var pass= document.getElementById('passd1').value;
    var cpass= document.getElementById('passd2').value;
    $.ajax({
        url:'/checkpass/',
        type:'get',
        data:{pass:pass, pass1:cpass},
        success:function(data){
            if(data.status==0){
            alert(JSON.stringify(data.message));
            document.getElementById('submit-btn').disabled = false;}
            else{
            alert(JSON.stringify(data.message));
            document.getElementById('submit-btn').disabled = true;}
        }
    })
    }