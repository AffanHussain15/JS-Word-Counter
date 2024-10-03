var user = prompt("Enter a Sentence");
var word = user.split(" ");
var result = 0;

for(var i = 0 ; i < word.length ; i++){
    if (word[i] !== ""){
        result++
    }
}

alert("Total Number of Words in this Sentencs is "+result+":");