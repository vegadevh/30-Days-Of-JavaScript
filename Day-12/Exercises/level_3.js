// Writ a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.

sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;

const cleanText = (sentence) => {
    const regEx = /[!@#$%^&*(;'<>/?.,]/g
    return sentence.replace(regEx, '');
}

console.log(cleanText(sentence));

const cleanSentence = cleanText(sentence);

const MostFrequentWords = (sentence, numberOfWordToShow) => {
    const sentenceArray = sentence.split(" ");
    const uniqueWords = new Set(sentenceArray)
    const frequentWords = [];

    for (const word of uniqueWords) {
        const regEx = new RegExp(`\\b${word}\\b`, 'gi');
        const matchingWords = sentence.match(regEx);
        frequentWords.push({ 'word': word, 'count': matchingWords.length });
    }

    const topWord = frequentWords.slice(0, numberOfWordToShow);
    const sortedWords = topWord.sort((a, b) => b.count - a.count);
    return sortedWords;
}

console.log(MostFrequentWords(cleanSentence, 3));
