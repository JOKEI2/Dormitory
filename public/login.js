function myFunction() {
    document.getElementById("inputUsername").submit();
    document.getElementById("inputPassword").submit();
}

function login() {
    axios.post('/api/auth/login', { username: inputUsername.value, password: inputPassword.value }).then(res=>{
        console.log(res.data)
        x = res.data
        if(x.success){

            
            if (x.type == '1'){
                window.location = "admin.html"
            }
            else if(x.type == '2'){
                window.location = "staff1.html"
            }
            else if(x.type == '3'){
                window.location = "profile.html"
            }
            
        }
        else{
            
        }
    
    })
}