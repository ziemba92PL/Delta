console.log("Podaj paramatry funkcji: a, b i c ")

let a = parseInt(prompt("Podaj współczynnik a:"));
let b = parseInt(prompt("Podaj współczynik b: "));
let c = parseInt(prompt("Podaj współczynik c: "));

console.log("Twoja funkcja to: " + a + "x^2 +" + b + "x +" + c);

let delta = ((b*b) -(4*a*c));

if (delta > 0 ) {
    let x1 = (((-1*b)-Math.sqrt(delta))/(2*a));

    let x2 = (((-1*b)+Math.sqrt(delta))/(2*a));
    console.log("Funkcja posiada dwa miejsca zerowe: " + x1 + " oraz " +x2 );
}

else if (delta == 0) {

    let x1 = (((-1*b)-Math.sqrt(delta))/(2*a));
    console.log("Funkcja posiada 1 miejsce zerowe:" + x1);
}

else {
    console.log("Funkcja nie posiada miejsc zerowych!");
}

1