// Modele e implemente um método recursivo que calcule o fatorial de um número n passado como parâmetro.
function fatorial(num) {
  if (num === 0) {
    return 1;
  }
  return num * fatorial(num - 1);
}
console.log("================================================");
console.log("Cálculo de fatorial:");
console.log("Fatorial de 5: " + fatorial(5)); // Saída: 120
console.log("O passo a passo é: 5 * 4 * 3 * 2 * 1 = 120");
console.log(" ");

// Modele e implemente um método recursivo que calcule o somatório de um número n (passado como parâmetro) até 0.
function somatorio(num) {
  if (num === 0) {
    return 0;
  } else if (num > 0) {
    return num + somatorio(num - 1);
  } else {
    return num + somatorio(num + 1);
  }
}
console.log("================================================");
console.log("Somatório de número até 0:");
console.log("Somatório de 5: " + somatorio(5)); // Saída: 15
console.log("O passo a passo é: 5 + 4 + 3 + 2 + 1 + 0 = 15");
console.log("Somatório de -5: " + somatorio(-5)); // Saída: -15
console.log("O passo a passo é: -5 + -4 + -3 + -2 + -1 + 0 = -15");
console.log(" ");

// Modele e implemente um método recursivo que calcule o n-ésimo número da sequência de fibonacci.
function fibonacci(num) {
  if (num <= 0) {
    throw new Error("O número deve ser maior que zero.");
  }
  if (num === 1 || num === 2) {
    return 1;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
}
console.log("================================================");
console.log("Cálculo do n-ésimo número de Fibonacci:");
console.log("Fibonacci de 5: " + fibonacci(5)); // Saída: 5
console.log("O passo a passo é: 1, 1, 2, 3, 5 = 5");
console.log(" ");

// Modele e implemente um método recursivo que calcule o somatório dos números inteiros entre os números k e j, passados como parâmetro.
function somatorioXY(k, j) {
  if (k > j) {
    return 0;
  }
  return k + somatorioXY(k + 1, j);
}
console.log("================================================");
console.log("Somatório de entre números:");
console.log("Somatório de 1 a 5: " + somatorioXY(1, 5)); // Saída: 15
console.log("O passo a passo é: 1 + 2 + 3 + 4 + 5 = 15");
console.log(" ");

// Modele e implemente um método recursivo que recebe um String em retorna true se este String for um palíndrome, false caso contrário.
function isPalindromo(str) {
  if (str.length <= 1) {
    return true;
  }

  if (str[0] != str[str.length - 1]) {
    return false;
  }

  return isPalindromo(str.slice(1, -1));
}
console.log("================================================");
console.log("Verificação de palíndromos:");
console.log("Arara é palíndromo: " + isPalindromo("arara")); // Saída: true
console.log("Banana é palíndromo: " + isPalindromo("banana")); // Saída: false
console.log(" ");

// Modele e implemente um método recursivo que recebe um inteiro zero ou positivo e retorna um String com o número em binário.
function convBase2(num) {
  if (num < 0) {
    throw new Error("O número deve ser zero ou positivo.");
  }
  if (num === 0) {
    return "0";
  }
  if (num === 1) {
    return "1";
  }
  return convBase2(Math.floor(num / 2)) + (num % 2).toString();
}
console.log("================================================");
console.log("Conversão de números para binário:");
console.log(" ");
console.log("Número 5 em binário: " + convBase2(5)); // Saída: 101
console.log("Número 10 em binário: " + convBase2(10)); // Saída: 1010
console.log("Número 0 em binário: " + convBase2(0)); // Saída: 0
console.log("Número 1 em binário: " + convBase2(1)); // Saída: 1
console.log(" ");

// Modele e implemente um método recursivo que calcule o somatório dos números contidos em um ArrayList de inteiros, passado como parâmetro.
function somatorioArray(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr[0] + somatorioArray(arr.slice(1));
}
console.log("================================================");
console.log("Somatório de números em Array:");
console.log(" ");
console.log("Array [1, 2, 3, 4, 5]: " + somatorioArray([1, 2, 3, 4, 5])); // Saída: 15
console.log("Array [20, 10, 30]: " + somatorioArray([20, 10, 30])); // Saída: 60
console.log(" ");

// Modele e implemente um método recursivo para encontrar o maior elemento de um ArrayList.
function findBiggest(arr) {
  if (arr.length === 0) {
    throw new Error("O array não pode estar vazio.");
  }
  if (arr.length === 1) {
    return arr[0];
  }

  const maxRest = findBiggest(arr.slice(1));

  return arr[0] > maxRest ? arr[0] : maxRest;
}
console.log("================================================");
console.log("Encontrar o maior elemento em um Array:");
console.log(" ");
console.log("Array [5, 2, 3, 4, 1]: " + findBiggest([5, 2, 3, 4, 1])); // Saída: 5
console.log("Array [10, 40, 30]: " + findBiggest([10, 40, 30])); // Saída: 40
console.log(" ");

// Implemente um método recursivo para determinar se um string ocorre dentro de outro.
function findSubString(str, match) {
  if (str.length < match.length) {
    return false;
  }
  if (str.slice(0, match.length) === match) {
    return true;
  }

  return findSubString(str.slice(1), match);
}
console.log("================================================");
console.log("Verificação de substring:");
console.log(" ");
console.log(
  "A palavra 'banana' contém 'ana': " + findSubString("banana", "ana")
); // Saída: true
console.log(
  "A palavra 'banana' contém 'arroz': " + findSubString("banana", "arroz")
); // Saída: false
console.log(
  "A palavra 'banana' contém 'bananas': " + findSubString("banana", "bananas")
); // Saída: false
console.log(" ");

// Faça um método recursivo que determina o número de dígitos de um inteiro.
function nroDigitos(num) {
  if (num < 0) {
    num = -num;
  }
  if (num < 10) {
    return 1;
  }
  return 1 + nroDigitos(Math.floor(num / 10));
}
console.log("================================================");
console.log("Contagem de dígitos de um número:");
console.log(" ");
console.log("Número 12345 tem " + nroDigitos(12345) + " dígitos."); // Saída: 5
console.log("Número -678 tem " + nroDigitos(-678) + " dígitos."); // Saída: 3
console.log(" ");

// Implemente um métodos que recebe um String e retorna um ArrayList com todas as permutações deste String.
function permutation(str) {
  if (str.length === 0) {
    return [""];
  }

  const result = [];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const remainingChars = str.slice(0, i) + str.slice(i + 1);
    const permutationsOfRemaining = permutation(remainingChars);

    for (const perm of permutationsOfRemaining) {
      result.push(char + perm);
    }
  }

  return result;
}
console.log("================================================");
console.log("Permutações de um String:");
console.log(" ");
console.log("Permutações de 'abc': " + permutation("abc")); // Saída: ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
console.log("Permutações de 'ab': " + permutation("ab")); // Saída: ['ab', 'ba']
console.log("Permutações de 'a': " + permutation("a")); // Saída: ['a']
console.log(" ");
