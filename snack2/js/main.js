const teams = [
    {
        nome: "juve",
        punti: 0,
        falli: 0.

    },
    {
        nome: "roma",
        punti: 0,
        falli: 0.

    },
    {
        nome: "milan",
        punti: 0,
        falli: 0.

    },
    {
        nome: "napoli",
        punti: 0,
        falli: 0.

    },
    {
        nome: "inter",
        punti: 0,
        falli: 0.

    },
];


let NewTeam;
for (let i = 0; i < teams.length; i++) {
    let risks = teams.map(risk => risk.falli)
    risks =  Math.floor(Math.random() * 100)
    let points = teams.map(point => point.punti)
    points = Math.floor(Math.random() * 100)
    NewTeam = {
    ...teams[i],
    punti: points,
    falli: risks
    }
    console.log(NewTeam);
}




