interface SplitTextResult {
  words: string[];
  characters: string[];
  wordCount: number;
  characterCount: number;
}

/**
 * Splits text into words and characters while preserving spaces
 * @param text - The text to split
 * @returns Object containing words array, characters array, and counts
 * @example
 * const result = splitText("Hello World");
 * // result = {
 * //   words: ["Hello ", "World "],
 * //   characters: ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d", " "],
 * //   wordCount: 2,
 * //   characterCount: 12
 * // }
 */
export function splitText(text: string): SplitTextResult {
  // Handle empty or whitespace-only strings
  if (!text?.trim()) {
    return {
      words: [],
      characters: [],
      wordCount: 0,
      characterCount: 0,
    };
  }

  // Split into words and preserve spaces
  const words = text.split(' ').map((word) => word.concat(' '));

  // Split into characters
  const characters = words.map((word) => word.split('')).flat(1);

  return {
    words,
    characters,
    wordCount: words.length,
    characterCount: characters.length,
  };
}
