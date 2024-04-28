function myFunction() {
    const element = document.getElementById("id01");
    element.innerHTML = "Nowy nagłówek";
}

function myColorChange() {
    const element = document.getElementById("id01");
    element.style.color = "red";
}


// Zadania - moduł 6

// this - pozwala nam się odwołać do aktualnie analizowanego obiektu, wskazuje na obiekt, który jest kontekstem wykonania, jest to referencja do obiektu, który wywołał daną funkcję.
// przykłady zastosowania:
// w zakresie globalnym -> Wywołanie this po prostu w skrypcie - wskaże on na globalny obiekt Window, reprezentujący okno przeglądarki.
// w zakresie funkcji -> odwołanie do właściwości wewnątrz obiektu


const person = {
    username: "Maciej", //Metoda zapisująca imię osoby w konsoli
    showName() {
        console.log(this.username); 
    }, //funkcja do wyświetlania imienia, słówko this odnosi się bezpośrednio do zefiniowanego wcześniej imienia użytkownika
};

person.showName(); //wywołanie metody showName dla obiektu person

/////////////////////////////////////////////////////////

const bookshelf = {
    authors: [],
// metoda zwracająca tablicę autorów
    getAuthors() {
return this.authors;
    },
    addAuthor(authorName) {
bookshelf.authors.push(bookshelf.addAuthor);
    }
};
// Dodanie kilku autorów do półki na książki
bookshelf.addAuthor("George Orwell");
bookshelf.addAuthor("Stephen King");

//pobranie listy autorów z półki na książki
const authorslist = bookshelf.getAuthors();
console.log(authorslist);