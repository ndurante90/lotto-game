/**
 * Take an array of selectors and returns an
 * array of values. Each value is taken by the DOM using
 * document.querySelector method. If selectors is not an array,
 * returns empty array
 * @param {Array<string>} selectors
 * @returns {Array<string>} - an array containing a value for each field
 */
export const getFieldsValues = (selectors) => {
  if (!Array.isArray(selectors)) return [];

  return selectors.map((selector) => {
    const field = document.querySelector(selector);
    return !!field ? field.value : null;
  });
};

/**
 * Take two numbers as parameters and returns an array of numbers
 * between minValue and maxValue (inclusive)
 * @param {number} minValue
 * @param {number} maxValue
 * @returns {Array<number>} - an array of numbers from minValue to maxValue
 */
export const getNumbers = (minValue, maxValue) => {
  const numbers = [];

  if (!Number(minValue) || !Number(maxValue)) {
    throw new Error(
      "getNumbers was executed with parameters of type not equal to number!"
    );
  }
  for (let i = minValue; i <= maxValue; i++) {
    numbers.push(i);
  }
  return numbers;
};

/**
 * Generate a ticket.amountOfNumbers-length sequence of unique numbers
 * between 1 to 90. The sequence is store in Ticket.numbers field
 * @param {Ticket} ticket
 */
export const generateNumbers = (ticket) => {
  let range = getNumbers(1, 90);

  for (let i = 1; i <= ticket.amountOfNumbers; i++) {
    let index = Math.floor(Math.random() * range.length);
    ticket.addNumber(range[index]);
    range.splice(index, 1);
  }
};

/**
 * Return a string of &nbsp; spaces
 * @param {number} num
 * @returns {string} - a string of &nbsp; entities
 */
export const printSpaces = (num) => {
  let str = "";
  for (let i = 1; i <= num; i++) {
    str += "&nbsp;";
  }
  return str;
};

/**
 * Given an array of object as [{key1: value}, {key2: value}...]
 * returns an array of keys as [key1, key2...]
 * @returns - array of keys
 */

export const keyValues = (arrayOfObjects) => {
  let values = Object.values(arrayOfObjects);
  return values.map((value) => Object.keys(value)[0]);
};
