const colors = ['yellow', 'blue', 'red', 'orange'];
let i = 0;

while (i < colors.length) {
    console.log(colors[i]);
    i++
};

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

colors.forEach(element => console.log(element));