let grades = [[89, 77, 78], [76, 82, 81], [91, 94, 89]]
let total = 0
let average = 0
for (let row = 0; row < grades.length; row++) {
    for (let col = 0; col < grades[row].length; col++) {
        total += grades[row][col];

    }
    average = (total / grades[row].length).toFixed(2)
    console.log(`student${row + 1}'s average grade is ${average}`);
    total = 0
    average = 0
}

function weekTemps() {
    this.dataStore=[]
    this.add=add
}
function add(tem) {
    this.dataStore.push(tem)
}
var thisWeek= new weekTemps()
thisWeek.add(55);
console.log(thisWeek.dataStore);
