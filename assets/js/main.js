const typeText = document.getElementById('typing-text');
const phrases = ['Web Developer', 'Android Developer', 'UI/UX'];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type(){
    const currrentPhrase = currentPhrase.substring(0,charIndex-1);
    const currentPhrase = phrases[phraseIndex];

    if(isDeleting){
        typeText.textContent = currentPhrase.substring(0,charIndex+1);
        typeText.textContent = currentPhrase.substring(0,charIndex+1);
    }else{
        typeText.textContent = currrentPhrase.substring(0,charIndex+1);
        charIndex++;
    }

    if(!isDeleting & charIndex == currrentPhrase.length){
        isDeleting = true;
        setTimeout(type,500);
    }else if(isDeleting && charIndex == 0){
        isDeleting = false;
        phraseIndex (phraseIndex+1) % phraseIndex.length;
        setTimeout(type,500);
    }else{
        setTimeout(type,isDeleting ? 50 : 150)
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const typingElement = document.querySelector("h2"); // Pilih elemen <h2>
    const textToType = typingElement.textContent; // Ambil teks dari <h2>
    const typingSpeed = 150; // Kecepatan mengetik
    const eraseSpeed = 100; // Kecepatan menghapus
    const delayBeforeErase = 1000; // Jeda sebelum mulai menghapus

    let index = 0; // Indeks karakter
    let isErasing = false; // Status: mengetik atau menghapus
    typingElement.textContent = ""; // Kosongkan teks awal

    function typeAndEraseText() {
        if (!isErasing) {
            // Logika mengetik
            if (index < textToType.length) {
                typingElement.textContent += textToType[index];
                index++;
                setTimeout(typeAndEraseText, typingSpeed);
            } else {
                // Jeda sebelum mulai menghapus
                setTimeout(() => {
                    isErasing = true;
                    typeAndEraseText();
                }, delayBeforeErase);
            }
        } else {
            // Logika menghapus
            if (index > 0) {
                typingElement.textContent = textToType.substring(0, index - 1);
                index--;
                setTimeout(typeAndEraseText, eraseSpeed);
            } else {
                // Ulangi proses mengetik
                isErasing = false;
                setTimeout(typeAndEraseText, typingSpeed);
            }
        }
    }

    // Mulai efek mengetik
    typeAndEraseText();
});

document.addEventListener("DOMContentLoaded", function () {
    document.body.style.zoom = "80%";
});


