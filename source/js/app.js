var myModule = {
  name: 'German',
  age: 31,
  sayName: function(){
    console.log(this.name);
  },
  setName: function(newName){
    this.name = newName;
  }
};

myModule.sayName();
myModule.setName("Sofia");
myModule.sayName();