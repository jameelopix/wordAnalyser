angular
  .module("wordApp", [])
  .controller("wordCounterController", function ($scope) {
    $scope.input = "";

    $scope.output = "";

    let names = ["narendra", "modi", "rahul", "gandhi"];

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
      // result = removeStringsFromArray(result, words2);
      // result = removeStringsFromArray(result, words3);

      $scope.output = result;
    };
  });
