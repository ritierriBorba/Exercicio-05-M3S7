let n1 = 17;
let n2 = 3;

if (n1 == n2) {
    if (n1 + n2 == 10) {
        console.log(`Os numeros ${n1} e ${n2} são iguais. Sua soma é ${n1 + n2}, que é igual a 10 e menor que 20.`);
    } else if (n1 + n2 > 10) {
        if (n1 + n2 == 20) {
            console.log(`Os numeros ${n1} e ${n2} são iguais. Sua soma é ${n1 + n2}, que é maior que 10 e igual a 20.`);
        } else if (n1 + n2 > 20) {
            console.log(`Os numeros ${n1} e ${n2} são iguais. Sua soma é ${n1 + n2}, que é maior que 10 e maior que 20.`);
        } else {
            console.log(`Os numeros ${n1} e ${n2} são iguais. Sua soma é ${n1 + n2}, que é maior que 10 e menor que 20.`);
        }
    } else {
        console.log(`Os numeros ${n1} e ${n2} são iguais. Sua soma é ${n1 + n2}, que é menor que 10 e menor que 20.`);
    }

} else {
    if (n1 + n2 == 10) {
        console.log(`Os numeros ${n1} e ${n2} não são iguais. Sua soma é ${n1 + n2}, que é igual a 10 e menor que 20.`);
    } else if (n1 + n2 > 10) {
        if (n1 + n2 == 20) {
            console.log(`Os numeros ${n1} e ${n2} não são iguais. Sua soma é ${n1 + n2}, que é maior que 10 e igual a 20.`);
        } else if (n1 + n2 > 20) {
            console.log(`Os numeros ${n1} e ${n2} não são iguais. Sua soma é ${n1 + n2}, que é maior que 10 e maior que 20.`);
        } else {
            console.log(`Os numeros ${n1} e ${n2} não são iguais. Sua soma é ${n1 + n2}, que é maior que 10 e menor que 20.`);
        }
    } else {
        console.log(`Os numeros ${n1} e ${n2} não são iguais. Sua soma é ${n1 + n2}, que é menor que 10 e menor que 20.`);
    }
}

