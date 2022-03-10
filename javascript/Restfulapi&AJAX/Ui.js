class UI{
    constructor(){
        this.profileContiner= document.querySelector('#profileContainer')
        this.alert=document.querySelector('#alert');
    }

    showProfile(profile){
        this.profileContiner.innerHTML = `
        
        <div class="card card-body">
            
            <div class="row">
            
                <div class="col md-3">
                    <a href="https://placeholder.com"><img src="https://via.placeholder.com/350x150" class="img-thumnail"></a>
                </div>     
                <div class="col md-9">

                    <h4>Contact</h4>
                    <ul class=""list-group>
                        <li class="list-group-item">Name:${profile.name}</li>
                        <li class="list-group-item">Username:${profile.username}</li>
                        <li class="list-group-item">Mail:${profile.email}</li>
                        <li class="list-group-item">Adress:${profile.address.street}
                        ${profile.address.city}
                        ${profile.address.zipcode}
                        ${profile.address.suite}
                        </li>
                        <li class="list-group-item">Phone:${profile.phone}</li>
                        <li class="list-group-item">Website:${profile.website}</li>
                        <li class="list-group-item">Company:${profile.company.name}</li>

                    </ul>
                    <h4 class="mt-4">Todo List</h4>
                    <ul id="todo" class=""list-group>
                    
                    
                    
                    
                    </ul>

                </div>
                    
            </div>
        
        
        </div>
        
        
        
        `
    }

    showAlert(text){
        this.alert.innerHTML = `${text} is not found`;
    }

    showTodo(todo){
        console.log(todo);

        let html ="";

        todo.forEach(item => {
            if(item.completed){
                html+=`
                
                <li class="list-group-item bg-success">
                ${item.title}</li>
                `
            }else{
                html+=`
                
                <li class="list-group-item bg-secondary">
                ${item.title}</li>
                `
            }
        });

        this.profileContiner.querySelector('#todo').innerHTML = html;

    }

    clear(){
        this.profileContiner.innerHTML ="";
        this.alert.innerHTML="";
    }
}