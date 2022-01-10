const hasDuplicates = (inputArray: unknown[]) => new Set(inputArray).size !== inputArray.length;

export default hasDuplicates;