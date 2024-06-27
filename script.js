class Person {
   name = "";
   lastname = "";
   age = "";

   set_name() {
    this.name = "Tatu"
   }

   get_name() {
    console.log(this.name)
   }

   set_lastname() {
    this.lastname = "Grigalashvili"
   }
   get_lastname() {
    console.log(this.lastname)
   }

   set_age() {
    this.age = 14
   }
   get_age() {
    console.log(this.age)
   }
}

var object = new Person();

object.set_name()
object.get_name()

object.set_lastname()
object.get_lastname()

object.set_age()
object.get_age()



