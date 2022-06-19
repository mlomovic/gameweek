data = [
    {
        ime: "John",
        prezime: "Smith",
        godine: 35
    },
    {
        ime: "Jane",
        prezime: "Smitters",
        godine: 36
    },
    {
        ime: "Henry",
        prezime: "Jenkins",
        godine: 29
    }
    ]

module.exports = class People{
    static getData(){
        return data;
    }
}