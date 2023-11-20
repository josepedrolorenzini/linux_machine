class TodoList {

    constructor(element){
        this.listElement  = element;
        this.submitTask   = document.querySelector('#submitTask');
        this.olParent = document.querySelectorAll('#list')
        this.addItemInput = document.forms[0][0];
        this.textList     = [];
        // this.textList    = ['javascript' , 'is' , 'not bad'];
    }

    clear(){
        //remove all existing <li> elements 
        while(this.listElement.firstChild){
            this.listElement.removeChild(this.listElement.firstChild)
        }
    }

    update(){
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
            this.addItemInput.value = ""
            
        })
      
       
    }

    //makes an <li>text</li> element tag 
    static createListItem(text){
        const li       =  document.createElement('li');
        const label    =  document.createElement('label');
        const input    =  document.createElement('input');
        input.type     = "checkbox";

        label.innerText  = text; /// check the issue with this.addItemInput
        li.classList.add('todo')
    
        li.appendChild(label)
        label.prepend(input)
        // li.textContent = text;
        return li;

    }
}


const list = document.getElementById('list')
const todoList =  new TodoList(list);
todoList.update()