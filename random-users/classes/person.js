class Person {
    #nombre;
    #apellido;
    #email;
    #phone;
    #image;
    #location;

    constructor(nombre, apellido){
        this.#nombre = nombre;
        this.#apellido = apellido;
    }

    get nombre(){
        return this.#nombre;
    }

    get apellido(){
        return this.#apellido;
    }

    get email(){
        return this.#email;
    }

    get phone(){
        return this.#phone;
    }

    get image(){
        return this.#image;
    }

    get location(){
        return this.#location;
    }
}

window.Person = Person;