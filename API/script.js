fetch('https://jsonplaceholder.typicode.com/posts/')
    .then(res => res.json())
    .then(json => {

        let limite = 0;

        json.map(item => {
            
            if (limite < 10) {
                
                if (limite < 9) {
                    
                    document.querySelector(".posts").insertAdjacentHTML("beforeend",` 
            
                    <div class="timeline"> 
    
                        <h1> #0${item.id}</h1> 
    
                        <div class="post"> 
                        
                            <h2> ${item.title} </h2> 
                            
                            <p> ${item.body} </p> 
    
                        </div>
                        
    
                    </div>
    
                `) 
                    
                }

                else {
                document.querySelector(".posts").insertAdjacentHTML("beforeend",` 
            
                <div class="timeline"> 

                    <h1> #${item.id}</h1> 

                    <div class="post"> 
                    
                        <h2> ${item.title} </h2> 
                        
                        <p> ${item.body} </p> 

                    </div>
                    

                </div>

            `) 
                }
            limite ++
            }
        })


    })
