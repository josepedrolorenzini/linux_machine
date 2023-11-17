class App{

    constructor(){
        this.serverName = window.location.host;
        this.windowlocation = window.location;

        document.querySelector("button")
        .addEventListener("click", this.getServerName.bind(this))

    }
    getServerName(){
       // return this.serverName;
      console.log(this.serverName , this)
    }
}

const app = new App();
app.getServerName()
// console.log(app.getServerName())