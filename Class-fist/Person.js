function classPopole(){
    class Person {
        constructor(fName, sName, age, email) {
            this.firstName = fName;
            this.secondName = sName;  // Corrected the typo
            this.age = age;
            this.email = email;
        }
        static toString() {
            return `${this.firstName} ${this.secondName} (age: ${this.age}, email: ${this.email})`;
        }
    }

    let person = new Person('Peter', 'Marinov', 18, 'pesho18@abv.bg');  
    console.log(person.toString());  // Output the string representation
}
classPopole()