let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

let storyWords = story.split(' ');

let wordCount = storyWords.length-1;

let betterWords = storyWords.filter(word=>{
 return !unnecessaryWords.includes(word)
})


let sentences = 0;
storyWords.forEach(word => {
  if (word[word.length-1] === '.' || word[word.length-1] === '!') {
    sentences+=1;
  }
});

let reallyCount = 0;
let veryCount = 0;
let basicallyCount = 0;


for(word of storyWords){
  if(word === 'really'){
    reallyCount += 1;
  } else if(word === 'very'){
    veryCount += 1;
  } else if(word === 'basically'){
    basicallyCount += 1;
  }
}

let sumCount = reallyCount + veryCount + basicallyCount;

// let sentencesCount = 0;

// for(word of betterWords){
//   if(word[word.length - 1] === '.' || word[word.length - 1] === '!'){
//     sentencesCount += 1;
//   }
// }

// console.log(sentencesCount);

// const logInfo = (param1, param2, param3) => {
//   console.log('Word count: ' + param1);
//   console.log('Sentence count: ' + param2);
//   console.log('Overused  count: ' + param3);
// }

// logInfo(wordCount, sentences, sumCount)

// console.log(betterWords.join(' '))

const freequendWord = (arr) => {
  let count = 0;
  let greatestCount =0;
  let result;

  for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr.length; j++){
      if(arr[i] === arr[j]){
        count += 1;
      }
    }
   if(count > greatestCount){
          greatestCount = count;
         result = arr[i];
        }
    count =0;
  }

      console.log(result)
}

  freequendWord(storyWords)
