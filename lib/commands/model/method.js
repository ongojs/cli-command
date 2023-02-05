const Method = require('../../../../model-method');

exports.command = (index = 2) => process.argv[index];
exports.defaultCommand = () => {
    if(!this.command(3)){
      return new Method({command: this.command(3)}).method();
    }else{
      if(this.command(3).startsWith('--name=')){
        if(this.command(3).split('=')[0] === '--name'){
         if(this.command(4) === '--info'){
           return new Method({ command: this.command(3).split('=')[1] }).info(this.command(4));
         }else if(this.command(4) === '-i'){
           return new Method({ command: this.command(3).split('=')[1] }).i(this.command(4));
         }else{
           return console.log('invalid option!')
         }
        }else{
         return console.log('invalid command')
        }
     }else{
       return console.log('invalid command')
     }
    }
  }
  exports.n = () => {
    if (this.command(4)) {
      if (this.command(5)) {
        switch (this.command(5)) {
          case "-i":
            new Method({ command: this.command(4) }).i(this.command(5));
            break;
          case "--info":
            new Method({ command: this.command(4) }).info(this.command(5));
            break;
          default:
            console.log(this.command(5), "is not a valid option");
            break;
        }
      } else {
        new Method({ command: this.command(3) }).n(this.command(5));
      }
    } else {
      new Method({ command: this.command(3) }).n();
    }
  }
  exports.name = () => {
    if (this.command(4)) {
      if (this.command(5)) {
        switch (this.command(5)) {
          case "-i":
            new Method({ command: this.command(4) }).i(this.command(5));
            break;
          case "--info":
            new Method({ command: this.command(4) }).info(this.command(5));
            break;
          default:
            console.log(this.command(5), "is not a valid option");
            break;
        }
      } else {
        new Method({ command: this.command(3) }).n(this.command(5));
      }
    } else {
      new Method({ command: this.command(3) }).n();
    }
  }
  exports.commands = () =>  {
    switch (this.command(3)) {
      case "--list":
        new Method({ command: this.command(3) }).list();
        break;
      case "man":
        console.log("make man page");
        break;
      case "-n":
        this.n()
        break;
      case "--name":
       this.name()
        break;
      case "help":
        console.log("help man page");
        break;
      default:
        this.default()
        break;
    }
  }
