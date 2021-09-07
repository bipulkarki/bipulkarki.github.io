let hello = document.querySelector("h1");
let english = document.getElementById('english');
let nepal = document.getElementById("nepal");
let india = document.getElementById('india');
let china = document.getElementById('china');
let japan = document.getElementById('japan');

english.addEventListener("click", function() {
    hello.innerHTML = "HELLO WORLD!";
});

nepal.addEventListener("click", function() {
    hello.innerHTML = "नमस्कार संसार!";
});

india.addEventListener("click", function() {
    hello.innerHTML = "नमस्ते दुनिया!";
});

china.addEventListener("click", function() {
    hello.innerHTML = "你好，世界!";
});

japan.addEventListener("click", function() {
    hello.innerHTML = "こんにちは世界!";
});
