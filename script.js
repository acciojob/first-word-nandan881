function firstWord(str) {
  // Trim leading and trailing spaces to handle cases where spaces are at the beginning or end
  str = str.trim();

  // Find the index of the first space
  const spaceIndex = str.indexOf(' ');

  // If no space is found, return the entire string
  if (spaceIndex === -1) {
    return str;
  }

  // Otherwise, return the substring from the beginning to the first space
  return str.substring(0, spaceIndex);
}

// Examples
console.log(firstWord('see and stop')); // Output: 'see'
console.log(firstWord(' Hello World!')); // Output: 'Hello'
console.log(firstWord('12345')); // Output: '12345'
console.log(firstWord('')); // Output: