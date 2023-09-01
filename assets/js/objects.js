//Opgave 1: Opret et objekt kaldet "person" med felterne "navn", "alder" og "job". Udskriv objektet til konsollen.

let person = {
    navn: "Ahmad Younis",
    alder: 26, 
    job: "Webudvikler",
    beskrivelse: function() {
        return "Navn: " + this.navn + ", Alder: " + this.alder + ", Job: " + this.job;
    }
};

console.log(person);

//Opgave 2: Tilføj en funktion til "person" objektet kaldet "beskrivelse",
// der returnerer en streng med personens navn, alder og job. Udskriv resultatet af funktionen.

let personBeskrivelse = person.beskrivelse();
console.log(personBeskrivelse)

//Opgave 3: Opret et array af objekter, der hver representer en person med navn, alder og job.
// brug en map funtion eller forEach til at udskrive alle personernes navne.

let personer = [
    {navn: "Ahmad", alder: 26, job: "Webudvikler"},
    {navn: "Peter", alder: 26, job: "Webudvikler"},
    {navn: "Ib", alder: 26, job: "Webudvikler"},
]

personer.forEach(function(person) {
    console.log(person.navn);
});

//Opgave 4: Lav et objekt kaldet "bil" med felterne "mærke", "model" og "år". 
//Opret en person med navn, alder og en bil (bil object). Udskriv personens biloplysninger.

let bil = {
    mærke: "Mazda",
    model: "MX-5",
    år: 2023
};

let personn = {
    navn: "Ahmad",
    alder: 26,
    bil: bil
};

console.log(personn);

//Opgave 5: Opret en kopi af "person" objektet ved at bruge  Object.assign(). Opdater kopien med en ny alder og udskriv både original og kopi.

Object.assign(personn)

let kopiPerson = Object.assign({}, personn);
kopiPerson.alder = 35;
console.log("Original person:");
console.log(person);

console.log("Kopi af person med opdateret alder:");
console.log(kopiPerson);