class TodoList {

    constructor(element){
        this.listElement  = element;
        this.submitTask   = document.querySelector('#submitTask');
        this.olListas = document.querySelectorAll('#list li');
        this.olParent = document.querySelectorAll('#list')
        this.addItemInput = document.forms[0][0];
        this.textList     = [];
        this.removeBtn = document.querySelectorAll('.remove-item') ;
        // this.removeTask = this.removeTask.bind(this);
        // this.removeTask = this.removeTask.bind(this.removeBtn)
      //  this.textList     = this.updateDescription.bind(this.textList)
        // this.textList    = ['javascript' , 'is' , 'good'];
    }

    clear(){
        //remove all existing <li> elements 
        while(this.listElement.firstChild){
            this.listElement.removeChild(this.listElement.firstChild)
        }
    }

    addTask(){
        this.clear();
        //fill <ul></ol> tag with <li>
        this.submitTask.addEventListener('submit', (e) => {
            e.preventDefault()
            console.log(e)
            console.log(document.forms[0][0].value);
            console.log(this.addItemInput.value);
            this.textList.push(this.addItemInput.value);

            document.forms[0][0].value
            this.listElement.appendChild(TodoList.createListItem(this.addItemInput.value));
            console.log(this.textList)
          
            this.addItemInput.value = "";
        })
      
    }

    //makes an <li>text</li> element tag 
    static createListItem(description){
        const li       =  document.createElement('li');
        const label    =  document.createElement('label');
        label.for      = "";
        const input    =  document.createElement('input');
        input.type     = "checkbox";

        //label.innerText  = text; /// check the issue with this.addItemInput
        label.innerHTML = ` ${description}  
        <button class="remove-item btn-link text-red">
        <i class="fa-solid fa-xmark" ></i>
        </button>`;
        li.classList.add('todo')
    
        li.appendChild(label)
        label.prepend(input)
        // li.textContent = text;
        return li;

    }

    setCompletedStatus( index, completed=true ){

        this.olParent.forEach((e,index) => {
            console.log(index, e.childNodes)
            e.addEventListener('change' , (ui) =>{
                console.log(ui.target.checked)
                if(completed){
                    ui.target.checked ?
                    ui.target.parentElement.classList.add('completed'):
                    ui.target.parentElement.classList.remove('completed') ;

                }

            })
        })
      
      }
      
      updateDescription( index =undefined, newDescription = undefined ){
            if(todoList.textList.length>0){

                for (let task in this.textList) {
                   console.log(this.textList[task])  
                   console.log(todoList.textList.length) 
                  //  todoList.textList.indexOf(key)
               }
            }else{

                console.log(this.textList)
            }
      
     
      }

      removeTask(e){
       
        for (const list of this.olParent) {
               
                if(list != null){
                    console.log(list)
                    list.addEventListener('click' , (e) => {

                       // console.log(e.target.parentElement)   
                       /// looping the list and removing the parent list 
                       // from the button which contain the class remove-item
                     if(e.target.parentElement.classList.contains('remove-item')){
                        if(confirm('are you sure?')){
                            e.target.parentElement.parentElement.parentElement.remove();
                        } else{
                            console.log(e.target.parentElement.classList);
                        }
                    }

                    })
                }

               
               
        }
        
          
      }
    
      // Returns true if all tasks in this.list are completed,
      // otherwise returns false ( consider .every() )
      allCompleted(element){
          try {
            element.forEach(e => e.addEventListener('change' , ()=> {
                for (const tag of  element) {
                    console.log(tag);
                  }
                  if(element.length <= 0){
                    console.log(true)
                    return true;
                  }else{
                    console.log(false)
                    return false;
                  }
            }))
          } catch (error) {
                console.error(error)
          }
          console.log( element );
         
      }
      
      // Returns an array of all the tasks whose descriptions
      // include the specified text (substring search)... use .filter() ?
      findMatchingTasks( searchText ){
        
        const itemFilter = document.getElementById('filter');
        const items = this.olParent;
        itemFilter.addEventListener('input' , (e) => {
            console.log(e.target , itemFilter.value , items)
            // if(itemFilter.value)
        // const items = document.querySelectorAll('.todo');
        // const text = e.target.value.toLowerCase();
        // const itemsArray = Array.from(items);

        // items.forEach(item => {
        //         const itemName = item.firstChild.textContent.toLocaleLowerCase();
        //         console.log(itemName)
        //         if(itemName.indexOf(text) != -1){
        //             // console.log(itemName.indexOf(text));
        //             item.style.display = 'flex';
        //             console.log(true)
        //         }else{
        //             item.style.display = 'none';
        //             console.log(false)
        //         }
        //     })
            });


      }
      
      // ADVANCED BONUS CHALLENGES:
      // Move a task from one position to another to reorder
      moveTask( fromIndex, toIndex ){

      }
      
      // Run the provided callback function when the last incomplete
      // task is completed (or removed?) ... you will need to store
      // the callback function as an instance variable so you can call 
      // it later
      onAllCompeted( callbackFunction ){
      }
      
      // Try out some getters and setters, i.e hide this.list from
      // access outside the class?
      // Add items from otherList into this list;
      // if copy is false, the other list should be emptied
      // (i.e. it's a "move")
      mergeList( otherList, copy=true ){
      }
      
      
}


const list = document.getElementById('list')
const todoList =  new TodoList(list);


document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM is ready!');
    todoList.addTask();
    todoList.updateDescription();
todoList.setCompletedStatus();
console.log(todoList.removeTask());
todoList.allCompleted(todoList.textList);
todoList.findMatchingTasks()
});


// todoList.removeBtn.forEach(e => 
//     e.addEventListener('click' , (x) =>{
//         console.log(x.target)
//     }))








