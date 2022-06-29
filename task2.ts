export { }

export class Exercise1 {
    // создать map<number, null>() 
    map: Map<number, null> = new Map()
    setMap(): void {
        for (let i = 0; i < 100; i++) {
            // задать как ключ мапы индекс(i), а как значение null.
            this.map.set(i, null);

            if (i % 3 === 0 && i % 5 !== 0) {
                console.log('Devided by tree')
            } else if (i % 5 === 0 && i % 3 !== 0) {
                console.log('Oops, here is 5')
            } else if (i !== 0 && i % 5 === 0 && i % 3 === 0) {
                console.log('I can believe in that!')
                // проверяю для себя
            } else { console.log('Neither here nor there') }
        }
    }
}

let exercise1 = new Exercise1();
exercise1.setMap();

const dataHouses: string[][] = [
    ["36", "не приватизирован", "4 собственника", "Парковая"],
    ["45", "приватизирован", "3 собственника", "Луговая"],
    ["56", "не приватизирован", "1 собственник", "Луговая"],
    ["56", "приватизирован", "5 собственников", "Ленина"],
    ["25", "не приватизирован", "2 собственника", "Ленина"],
    ["40", "не приватизирован", "2 собственника", "Ленина"]
];

// метод, который будет принимать в себя площадь дома, и улицу на которой он находится
// площадь дома 56 и любые улицы, площадь дома 40 и только "Ленина"

const Exercise2 = (dataCondition: string[]): boolean => {
    const [area, privatization, numberOfOwners, street] = dataCondition;
    return (area === "56" || (area === "40" && street === "Ленина"));
};

const printExercise2 = (dataHouses: string[][]): void => {
    dataHouses.forEach((c) => console.log(`${Exercise2(c)}`));
};

printExercise2(dataHouses);