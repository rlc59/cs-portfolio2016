// JavaScript File 
var geniusButton = document.getElementById("geniusquote");
var stupidButton = document.getElementById("stupidquote");
var inspirationalButton = document.getElementById("inspirationalquote");
var geniusquote = [
 "The difference between stupidity and genius is that genius has its limits. -Albert Einstein",
 "Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring. -Marilyn Monroe",
 "Nothing in this world can take the place of persistence. Talent will not: nothing is more common than unsuccessful men with talent. Genius will not; unrewarded genius is almost a proverb. Education will not: the world is full of educated derelicts. Persistence and determination alone are omnipotent. -Calvin Coolidge",
 "Genius is eternal patience. -Michelangelo",
 "The true genius shudders at incompleteness - and usually prefers silence to saying something which is not everything it should be. -Edgar Allan Poe",
 "The genius of Einstein leads to Hiroshima. -Pablo Picasso",
];
var stupidquote = [
 "Have you ever wondered why you cant taste your tongue?  -Joe",
 "Im not a complete idiot Some pieces are missing  -Clemson",
 "The following statement is true The previous statement is false  -Pete Wu",
 "Calling someone stupid doesnt make you any smarter  -Diff",
 "The strawberry shampoo doesnt taste as good as it smells.  -David",
 "I was wondering why the frisbee was getting bigger Then it hit me  -Alainah",
];
var inspirationalquote = [
 "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it. -Steve Jobs",
 "Believe you can and you're halfway there. -Theodore Roosevelt",
 "Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship. -Buddha",
 "Try to be a rainbow in someone's cloud. -Maya Angelou",
 "We know what we are, but know not what we may be. -William Shakespeare",
 "No matter what people tell you, words and ideas can change the world. -Robin Williams",
];

//These are the quotes for the generator shown below
console.log(geniusquote)

function newgeniusquote() {
 var randomNumber = Math.floor(Math.random() * geniusquote.length);
 document.getElementById('quoteDisplay').innerHTML = geniusquote[randomNumber];
}

function newstupidquote() {
 var randomNumber = Math.floor(Math.random() * (stupidquote.length));
 document.getElementById('quoteDisplay').innerHTML = stupidquote[randomNumber];

}

function newinspieequote() {
 var randomNumber = Math.floor(Math.random() * (inspirationalquote.length));
 document.getElementById('quoteDisplay').innerHTML = inspirationalquote[randomNumber];
}
geniusButton.addEventListener("click", newgeniusquote);
// geniusquote.getElementById("geniusquote");

stupidButton.addEventListener("click", newstupidquote);
// stupidquote.getElementById("stupidquote");

inspirationalButton.addEventListener("click", newinspieequote);
// inspirationalquote.getElementById("inspirationalquote");

// Genius Quotes here


//Stupid Quotes here
//Inspirational Quotes here
