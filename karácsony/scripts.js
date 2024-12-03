/* Sörkalkulátor*/
document.getElementById("calculate-btn").addEventListener("click", function () {
    const temp = parseInt(document.getElementById("temperature").value, 10);
    const tasks = parseInt(document.getElementById("tasks").value, 10);
    const candles = parseInt(document.querySelector('input[name="candles"]:checked').value, 10);

    const result = calculateBeerTime(temp, tasks, candles);
    document.getElementById("beer-result").innerText = result;
});

function calculateBeerTime(temp, tasks, candles) {
    if (temp < 0 && tasks > 5) {
        return "Hideg is van, a feladatokkal sem állsz sehogy, kezdj el inkább inni!";
    } else if (candles >= 4) {
        return "Megérdemelsz egy sört, hiszen már ünnepi a hangulat!";
    } else if (tasks === 0) {
        return "Mindent megcsináltál, nincs más hátra, mint lelkiismeret-furdalás nélkül inni!";
    } else {
        return "Várj még egy kicsit (opcionális), hiszen néhány feladat még hátra van!";
    }
}

/* Gyulladó gyertya, NE FELEJTSD EL A CSS-ben helyre igazítani a lángot és a reszponzivitást!!4!44444!*/
const candle = document.getElementById("candle");
const flame = document.getElementById("flame");
const scents = ["Mézeskalács", "Forralt bor", "Vanília", "Fenyőfa", "Narancs és fahéj", "Pálpusztai sajt"];

candle.addEventListener("click", function () {
    if (flame.style.display === "none") {
        flame.style.display = "block";
        const randomScent = scents[Math.floor(Math.random() * scents.length)];
        document.getElementById("random-scent").innerText = randomScent;
    } else {
        flame.style.display = "none";
    }
});

/*Köszöntők*/
const greetings = [
    "Kellemes ünnepeket! Ne feledd, a bejgli mellé mindig jól csúszik egy pohár sör!",
    "Boldog karácsonyt! Remélem, a Jézuska nemcsak ajándékot, hanem egy jó hideg sört is hoz neked!",
    "Karácsonykor a szeretet és a sör legyen veled! Egészségedre és boldog ünnepeket!",
    "Ne felejtsd el, hogy a karácsony a pihenésről (és a sörről) szól!",
    "Ne feledd, a karácsony a pihenésről szól. Dőlj hátra, élvezd a kajakómát egy jó sör társaságában!",
    "Boldog karácsonyt! Igyál egy sört az egészségemre is, hiszen az ünnepek alatt minden kalória megengedett!",
    "Kellemes ünnepeket! Ne felejtsd el, hogy a karácsonyi vacsora után a legjobb desszert egy hideg sör!",
    "Karácsonykor a család és a barátok mellett a sör is összeköt minket. Egészségedre és boldog ünnepeket!",
    "Kívánok neked békés karácsonyt, sok nevetést és persze elegendő sört a jó hangulathoz!",
    "Boldog karácsonyt! Ne feledd, a karácsonyi csoda néha egy jól behűtött sör formájában érkezik!"

];

document.getElementById("generate-greeting-btn").addEventListener("click", function () {
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    document.getElementById("greeting-output").innerText = randomGreeting;

    /*Felolvasás*/
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(randomGreeting);


    const voices = synth.getVoices();
    const spanishVoice = voices.find(voice => voice.name === 'Google español' && voice.lang === 'es-ES');

    if (spanishVoice) {
        utterance.voice = spanishVoice;
        utterance.lang = 'es-ES'; // SPanyol akcentus
        synth.speak(utterance);
    } else {
        console.warn('A "Google español" hang nem található.');
    }
});

