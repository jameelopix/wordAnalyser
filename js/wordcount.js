angular
  .module("wordApp", [])
  .controller("wordCounterController", function ($scope) {
    $scope.input = "";

    $scope.output = "";

    $scope.wordCount = "";

    let names = ["narendra", "modi", "rahul", "gandhi"];

    let joiningWords = [
      "and",
      "or",
      "because",
      "before",
      "behind",
      "not",
      "beside",
      "besides"
    ];

let question = [
  "where",
  "which",
  "what",
  "how",
  "why",
  "whose",
  "when",
  "who",
  "whom"    
];

let relations = [
  "relation",
  "relationship",
  "relationships",
  "boyfriend",
  "boyfriends",
  "girlfriend",
  "girlfriends",
  "dad",
  "daddy",
  "father",
  "mom",
  "mommy",
  "mother",
  "male",
  "males",
  "female",
  "females",
  "people",
  "friend",
  "friends",
  "dating"
]; 

    let pronouns = [
      "i",
"me",
"you",
"he",
"him",
"she",
"her",
"it",
"we",
"us",
"you",
"they",
"them",
"this",
"that",
"these",
"those",
"mine",
"yours",
"his",
"hers",
"ours",
"yours",
"theirs",
"who",
"whom",
"what",
"which",
"whose",
"another",
"anybody",
"anyone",
"anything",
"each",
"either",
"enough",
"everybody",
"everyone",
"everything",
"less",
"little",
"much",
"neither",
"nobody",
"noone",
"nothing",
"one",
"other",
"somebody",
"someone",
"something",
"you",
"both",
"few",
"fewer",
"many",
"others",
"several",
"they",
"all",
"any",
"more",
"most",
"none",
"some",
"such",
"myself",
"yourself",
"himself",
"herself",
"itself",
"ourselves",
"yourselves",
"themselves",
"theyre",
"theyve"
    ];

    let companies = [
      "ibm",
      "microsoft",
      "google",
      "facebook",
      "twitter",
      "instagram",
      "itc",
      "reliance",
      "whatsapp",
      "oracle",
"lamborghini"
    ];

    let numbers = [
      "single",
      "plural",
      "first",
"second",
"third",
"fourth",
"fifth",
"sixth",
"seventh",
"eighth",
"ninth",
"tenth",
"eleventh",
"twelfth",
"thirteenth",
"fourteenth",
"fifteenth",
"sixteenth",
"seventeenth",
"eighteenth",
"nineteenth",
"twentieth",
"hundredth",
"thousandth",
"last",
"one",
"two",
"three",
"four",
"five",
"six",
"seven",
"eight",
"nine",
"ten",
"eleven",
"twelve",
"thirteen",
"fourteen",
"fifteen",
"sixteen",
"seventeen",
"eighteen",
"nineteen",
"twenty",
"thirty",
"forty",
"fifty",
"sixty",
"seventy",
"eighty",
"ninety",
"hundred",
"hundreds",
"thousand",
"thousands",
"lakh",
"lakhs",
"crore",
"crores",
"million",
"millions",
"billion",
"billions"
    ];

    let animals = ["albatross",
    "alligator",
    "antelope",
    "arctic fox",
    "armadillo",
    "baboon",
    "badger",
    "bat",
    "beagle",
    "bear",
    "beaver",
    "bison",
    "blue whale",
    "boar",
    "buffalo",
    "bull",
    "camel",
    "cat",
    "chameleon",
    "cheetah",
    "chihuahua",
    "chimpanzee",
    "chinchillas",
    "cobra",
    "cow",
    "crocodile",
    "crow",
    "deer",
    "dodo",
    "dog",
    "dolphin",
    "donkey",
    "duck",
    "eagle",
    "eel",
    "elephant",
    "elk",
    "emu",
    "fish",
    "flamingo",
    "flying squirrel",
    "fox",
    "frog",
    "giant panda",
    "giraffe",
    "goat",
    "goose",
    "gorilla",
    "hammerhead shark",
    "hamster",
    "hare",
    "hawk",
    "hedgehog",
    "hen",
    "hermit crab",
    "hippopotamus",
    "horse",
    "ibex",
    "iguana",
    "jackal",
    "jaguar",
    "jellyfish",
    "kangaroo",
    "king cobra",
    "koala",
    "lemur",
    "leopard",
    "lion",
    "lizard",
    "llama",
    "lynx",
    "mammoth",
    "meerkat",
    "mole",
    "monitor lizard",
    "monkey",
    "mouse",
    "mule",
    "orangutan",
    "ostrich",
    "otter",
    "owl",
    "panther",
    "peacock",
    "pigeon",
    "polar bear",
    "porcupine",
    "possum",
    "rabbit",
    "racoon",
    "rat",
    "rhinoceros",
    "sheep",
    "sloth",
    "snake",
    "swan",
    "tiger",
    "tortoise",
    "turtle",
    "vulture",
    "whale",
    "wolf",
    "wombat",
    "zebra"
    ];

    function removeWordsByLength(paragraph, minLength) {
      var words = paragraph.split(" ");
      var filteredWords = words.filter(function (word) {
        return word.trim().length > minLength;
      });
      var filteredParagraph = filteredWords.join(" ");
      return filteredParagraph;
    }

    function removeStringsFromArray(inputString, stringArray) {
      // Create a regular expression pattern by joining the array elements with "|"
      const pattern = new RegExp("\\b(" + stringArray.join("|") + ")\\b", "g");

      // Use the replace() method with the pattern to remove whole words
      const result = inputString.replace(pattern, "");

      return result;
    }

    function removeSymbols(paragraph) {
      var updatedParagraph = paragraph.replace(/[^\w\s]|_/g, "");
      updatedParagraph = updatedParagraph.replace(/\n/g, " ");
      return updatedParagraph;
    }

    $scope.processInput = function () {
      console.log("Inside process input....!!!!");

      let result = removeSymbols($scope.input);
      result = result.toLowerCase();

      result = removeWordsByLength(result, 5);

      result = removeStringsFromArray(result, names);
      result = removeStringsFromArray(result, animals);
      result = removeStringsFromArray(result, companies);
      result = removeStringsFromArray(result, numbers);
      result = removeStringsFromArray(result, question);
      result = removeStringsFromArray(result, pronouns);
      result = removeStringsFromArray(result, relations);
      result = removeStringsFromArray(result, joiningWords);

      
      let resultSplit = result.split(" ");
const finalWordList = [...new Set(resultSplit)];

// console.log(uniqueWordsArray);
      
      // result = removeStringsFromArray(result, words2);
      // result = removeStringsFromArray(result, words3);

      $scope.output = finalWordList;
      // $scope.wordCount = result.split(' ').length;
      $scope.wordCount = finalWordList.length;
    };
  });
