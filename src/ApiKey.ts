/**
 * @returns {string} A Random API key
 */
function getKey(): string {
  const keysArray = process.env.KEYS_ARRAY;
  // const randomKey = keysArray[Math.floor(Math.random() * keysArray.length)];
  return keysArray;
}

export default getKey;
