let arr=[];
        displayitems();
        function store(){

            let inputvalue=document.querySelector('.inputbhai').value;
            let datevalue=document.querySelector('.datebhai').value;

            arr.push({inputvalue,datevalue});
            
            inputvalue='';
            datevalue='';

            displayitems();

       }

       function displayitems(){

        let cont=document.querySelector('.paracontent');
        let newhtml='';
        
        for(let i = 0; i < arr.length; i++){
                
            newhtml+=`
            <div>
            <span>${(arr[i].inputvalue)}  ${(arr[i].datevalue)} 
            <button onclick="arr.splice(${i},1); displayitems();">Delete</button>
            </div> `;
            }
       cont.innerHTML=newhtml;


        }