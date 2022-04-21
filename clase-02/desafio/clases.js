class Usuario {
    constructor(name, lastName, books, pets) {
        this.name = name;
        this.lastName = lastName;
        this.books = books;
        this.pets = pets;
    }


    getFullName() {
        return `Nombre: ${this.name} Apellido: ${this.lastName}`
    }

    addPets(pet) {
        this.pets.push(pet)
    }
    countPets() {
        return `${this.pets.length}`
    }
    addBook(name, author) {
        this.books.push({
            name,
            author
        })
    }
    getBookNames() {
        return this.books.map(n => n.name)
    }
}


const usuario1 = new Usuario('Luciano', 'Roagna', [{
    name: 'El señor de las moscas',
    author: 'William Golding'
}, {
    name: 'Fundacion',
    author: 'Isaac Asimov'
}], ['perro', 'gato'])
console.log(usuario1)
console.log(usuario1.getFullName())
usuario1.addPets('Hamster')
console.log(usuario1.countPets())
usuario1.addBook('Narnia', 'C. S. Lewis')
console.log(usuario1.getBookNames())