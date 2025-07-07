const question = document.querySelector('.question');
const gif = document.querySelector('.gif');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');

yesBtn.addEventListener("click", () => {
    question.innerHTML = "Semangtttt, nih hadiah biar semangatt (tekan hadiahnya)";
    gif.src = "image/PP bear cute nih couple nya.jpeg";
    gif.width = 200;

    // Tengahin
    gif.style.display = "block";
    gif.style.margin = "20px auto";

    // Buat bisa diklik
    gif.style.cursor = "pointer";
    gif.addEventListener("click", () => {
        window.open("https://mhminnn.github.io/acaaaa/", "_blank");
    });
});

noBtn.addEventListener('mouseover', () => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.position = "absolute";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});
