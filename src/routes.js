

 usersAge= []
var data    
    request = new XMLHttpRequest();
    request.open('GET', 'http://localhost:3000/users', true);
    request.onload = function () {
        data = JSON.parse(this.response)
        
        if (request.status >= 200 && request.status < 400) {
            data.forEach(users => {
                console.log(request.status)
                //console.log(users.age)
                // usersAge.push(users.age)
            })
        } else {
            console.log('error')
        }
        
    }
    
    
    request.send()

    
    
    
    
    getUsers = function(){
       usersAge = []
            // console.log(data)
            data.forEach(users => {
                //console.log(users.age)
               
                usersAge.push(users.age)
            })
            console.log(usersAge)
        return usersAge;
}