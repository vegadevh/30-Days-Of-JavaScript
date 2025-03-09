// Write a function called tenMostFrequentWords which get the ten most frequent word from a string?

const tenMostFrequentWords = (paragraph, numberOfWordToShow) => {
    // const parag = paragraph.split(" ");
    // const frequentWords = []
    // parag.map(word => {
    //     const wordObject = frequentWords.find(w => w.word === word);
    //     if (wordObject) {
    //         wordObject.count++;
    //     } else {
    //         frequentWords.push({ 'word': word, 'count': 1 })
    //     }
    // })
    // const topFrequentWords = frequentWords.slice(0, numberOfWordToShow);
    // const sortedfrequentWords = topFrequentWords.sort((a, b) => b.count - a.count);
    // return sortedfrequentWords;

    const parag = paragraph.split(" ");
    const uniqueWords = new Set(parag);
    const frequentWords = []
    for (const word of uniqueWords) {
        const regEx = new RegExp(`\\b${word}\\b`, 'gi');
        const matchingWords = paragraph.match(regEx);

        frequentWords.push({ 'word': word, 'count': matchingWords.length })
    }
    const topFrequentWords = frequentWords.slice(0, numberOfWordToShow);
    const sortedfrequentWords = topFrequentWords.sort((a, b) => b.count - a.count);
    return sortedfrequentWords;
}

paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;
console.log(tenMostFrequentWords(paragraph, 10));