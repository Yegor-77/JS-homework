//1
let carentClients = 0;
const maxClient = 10;

while (carentClients < maxClient) {
  carentClients += 1;
  console.log("кількість", carentClients);
  if (carentClients === 10) {
    console.log("все");
  }
}

//2
let i;

for (let i = 2; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//3
for (let b = 1; b <= 10; b++) {
  console.log(`7 x ${b} = ${7 * b}`);
}

//4
let n = 5;

for (let aaa = 0; aaa < 100; aaa++) {
  if (aaa >= n) {
    break;
  }
  console.log(aaa);
}

//5
let g = 1;

while (g <= 20) {
  if (g % 3 === 0) {
    g++;
    continue;
  }
  console.log(g);
  g++;
}
