//person constructor
function Person(name){
    this.name = name;
}

Person.prototype.Introduce = function() {
    console.log('hello my name is '+this.name);
  }

  //teacher constructor
  function Teacher(name,branch){
      Person.call(this,name);
      this.branch = branch;
  }

  Teacher.prototype = Object.create(Person.prototype);
  Teacher.prototype.constructor = Teacher;
  Teacher.prototype.teach = function(){
      console.log('I teach ' +this.branch);
  }

  //student constructor
  function Student(name,number){
      Person.call(this,name);
      this.number = number;
  }

  Student.prototype = Object.create(Person.prototype);
  Student.prototype.constructor = Student;

  Student.prototype.study = function(){
      console.log('my student number'+this.number +'ıve already studied hard ');
  }

  //headmaster constructor

  function Headmaster(name,branch){
        Teacher.call(this,name,branch);

    }
    Headmaster.prototype = Object.create(Teacher.prototype);
    Headmaster.prototype.constructor = Headmaster;

    Headmaster.prototype.shareTask = function(){
        console.log('Ive already shared all the work');
    }

  let p1 = new Person ('cabbar');
  p1.Introduce();

  let t1 = new Teacher('rezak','math');
  t1.Introduce();
  t1.teach();

  let s1 = new Student('muttalip',99);
  s1.Introduce();
  s1.study();


  let h1 = new Headmaster('haydar','biolgy');
  h1.Introduce();
  h1.teach();
  h1.shareTask();
