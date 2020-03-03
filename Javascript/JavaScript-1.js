        //This is a comment
        alert("Javascript is working!!!");
        const num = 19;
        if(num === 10){// === compares value as well as data type || == compares just the value
            console.log("num is 10");} 
        else{
            console.log("num is not 10");
        }
        let word = 'Some word';
        console.log("Default value of String: "+num);
        console.log("String to uppercase: "+word.toUpperCase());
        console.log(`The length of ${word} is ` +word.length );
        console.error("This is a user defined error");
        console.log("The type of num is "+typeof(num));
        console.log("The type of word is "+typeof(word));
        console.log(`Joining a sentence with ${word}`); //ES6 Statement
     
     let obj1 = {var1 : 's',
                var2 : 2,
     };
     
      let array = [1,2,3,4,5,true,obj1,'hi']; //Arrays in javascript can hold many types of values
      console.log("Arrays output");
      console.log(array[1]);
      console.log(array[6]);
      array.push(10);
      array.unshift(99);
      console.log("Array display"+array);
      
      let person = {
        firstName : 'Tim',
        lastName : 'John',
        age : 18,
        grow(){
            this.age++;
        },
        hobbies : ['music','movies','sports'],
        address : {
            street : '50 Up Road',
            city : 'Downtown'
        }
    
      };
      
      let copyPerson = Object.create(person);
      let values = Object.values(person);
      
      console.log(values);
      copyPerson.firstName ="copy";
      console.log(copyPerson);
      console.log(person);
      person.grow();
      console.log(person.age);
      console.log(person.firstName);
      console.log(person.address.street);
      console.log(person.hobbies[1]);
      
      const todos = [
        {id: 1, text: 'Wake up', isCompleted : true},
        {id: 2, text: 'Brush Teeth', isCompleted : false},
        {id: 3, text: 'Take Bath', isCompleted : true}
      ];
      console.log(todos);
      console.log(todos[1].id);
      console.log(JSON.stringify(todos));//useful for sending data to a server
      
      todos.forEach(function(todo){ //high order array methods take in a "function" as a paramter
        console.log(`${todo.text}  ${todo.isCompleted}` );
      });
      
      console.log(todos.map( function(todo){ // map returns a new array
        return todo.text;
      }));
      
      console.log(todos.filter(function(todo){
       //if(todo.isCompleted ===true){ return todo;}
       return todo.isCompleted === true;
      }));
      //foreach, map and filter fall into functional programming
      
      function add(num1= 6, num2= 1){
        console.log(num1 + num2);
        return num1+num2;
      }
      add();
      add(1,3);
      
      //OOP
      //Constructor function
      function Person(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
        this.getFirstName=function(){
            return this.firstName;
        };
      }
      //Prototypes
      Person.prototype.getFullName = function() {
      return `${this.firstName}    ${this.lastName}`;
      };
      
      Person.prototype.nationality = "English";
      
      const person1 = new Person('John','Doe','4-3-1980');
      const person2 = new Person('Tim','Allen','5-3-1980');
        console.log(person1.getFirstName());
        console.log(person2.getFullName());
        console.log(person1.dob);
        console.log(person1);
        console.log(person2);