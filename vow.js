
function readSentence(text){
    let sentenceLength = 0;
    let words = 0;
    let vowelCount = 0;
    

    char = {
        a:'a',
        e:'e',
        i:'i',
        o:'o',
        u:'u',
    }
    
    words = text.split(" ").length
    
    for(i = 0; i < text.length; i++){
        sentenceLength = text[i]
        
        if(char[text[i].toLowerCase()]){
            vowelCount++
        }
        
        }
        
    return {words,vowelCount}
}
console.log(readSentence('THIS IS A SENTENCE THAT READS THE VOWELS AND WORDS'))
