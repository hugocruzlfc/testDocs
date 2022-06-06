// Given an array of URLs and a MAX_CONCURRENCY integer,
// implement a function that will asynchronously fetch each URL,
//  not requesting more than MAX_CONCURRENCY URLs at the same time.
//  The URLs should be fetched as soon as possible.
//  The function should return an array of responses for each URL.
//  How would you write a test for such a function?

// Basically I understood it like this, but the MAX_CONCURENCY number created certain doubts.
// I divided the exercise into 3 functions for readability and good practices

const matrizUrls: string[] = [
  "https://google.com",
  "https://youtube.com",
  "https://google1.com",
  "https://google1.com",
];
const MAX_CONCURRENCY = 2;

// principal function
const getUrls = async () => {
  const arrayResponse: string[][][] = [];
  const totalIteration = matrizUrls.length / MAX_CONCURRENCY;
  for (let index = 0; index < totalIteration; index++)
    arrayResponse.push(await getUrl(index));

  return arrayResponse;
};

const getUrl = async (index: number): Promise<string[][]> => {
  const limite = index + MAX_CONCURRENCY;
  const urlArray: string[][] = [];
  for (let indexFor = index; indexFor < limite; indexFor++) {
    try {
      urlArray.push([await requestUrl(indexFor)]);
    } catch (error) {
      console.log(error, indexFor);
    }
  }

  return urlArray;
};

const requestUrl = async (index: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (matrizUrls[index]) {
      setTimeout(() => {
        resolve(matrizUrls[index]);
      }, 2000);
    } else {
      reject(new Error("index doesnt exist"));
    }
  });
};

//TEST
// The most basic test that I would try
// would be that the result is equal to what is expected.
// in my test file

// const getUrls = require("./functionAsync");

// let result, expected;

// result = getUrls();
// expected = [
//   ["https://google.com"]["https://youtube.com"],
//   ["https://google1.com"],
//   ["https://google1.com"],
// ];

// if (result !== expected) {
//   throw new Error(`${result} is different from ${expected}`);
// }

// console.log("¡Test1 OK!");
