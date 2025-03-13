const fibonacciLinear = (n) => {
  // Validação do input
  if (!Number.isInteger(n) || n < 0)
    return "O parâmetro n deve ser um número inteiro não negativo";

  // n = 1 e n = 0
  if (n <= 1) return `fib(${n}) = ${n}`;

  // Variáveis para armazenar os termos anteriores para dar continuidade ao cálculo do próximo termo
  // A sequência de Fibonacci começa com 0 e 1
  let a = 0;
  let b = 1;

  // Calcula o resultado até o n-ésimo termo utilizando os dois termos anteriores
  for (let i = 2; i <= n; i++) {
    const soma = a + b;

    // Atualiza os termos anteriores para o próximo cálculo
    a = b;
    b = soma;
  }

  return `fib(${n}) = ${b}`;
};

const fibonacciRecursivo = (n) => {
  // Validação do input, feita fora da função recursiva para melhorar a performance evitando repetições
  if (!Number.isInteger(n) || n < 0)
    return "O parâmetro n deve ser um número inteiro não negativo";

  // memory armazena os resultados já calculados para evitar recalculá-los reduzindo o tempo de execução
  const fibonacci = (n, memory = {}) => {
    // n = 1 e n = 0
    if (n <= 1) return n;

    // Verifica se o resultado já foi calculado
    if (memory[n] !== undefined) return memory[n];

    // Calcula o resultado e armazena na memória
    memory[n] = fibonacci(n - 1, memory) + fibonacci(n - 2, memory);

    return memory[n];
  };

  return `fib(${n}) = ${fibonacci(n)}`;
};

const validaNumeroPrimo = (n) => {
  if (!Number.isInteger(n) || n < 2) return false;

  // Verifica se o número é divisível por algum número até a raiz dele
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }

  return true;
};

const numerosPrimosLinear = (n) => {
  // Validação do input
  if (!Number.isInteger(n) || n < 2)
    return "O parâmetro n deve ser um número inteiro maior ou igual a 2";

  const primos = [];

  // Verifica se o número é primo e o adiciona à lista de primos
  for (let i = 2; i <= n; i++) {
    if (validaNumeroPrimo(i)) primos.push(i);
  }

  return `p(${n}) = [${primos}]`;
};

const numerosPrimosRecusivo = (n) => {
  // Validação do input, feita fora da função recursiva para melhorar a performance evitando repetições
  if (!Number.isInteger(n) || n < 2)
    return "O parâmetro n deve ser um número inteiro maior ou igual a 2";

  const numerosPrimos = (n, memory = []) => {
    if (n === 2) {
      memory.push(n);
      return memory;
    }

    // Verifica se o número é primo e o adiciona à lista de primos
    if (validaNumeroPrimo(n)) memory.push(n);

    memory = numerosPrimos(n - 1, memory);

    return memory;
  };

  return `p(${n}) = [${numerosPrimos(n).reverse()}]`;
};

const num = 55;

console.log("Função Fibonacci linerar: ", fibonacciLinear(num));
console.log("Função Fibonacci recursiva: ", fibonacciRecursivo(num));
console.log("Função primos linerar: ", numerosPrimosLinear(num));
console.log("Função primos recursiva: ", numerosPrimosRecusivo(num));
