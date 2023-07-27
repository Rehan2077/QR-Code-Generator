const api_url = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=';
const text = document.getElementById('text');
const btn = document.getElementById('btn');

let imgBox = document.getElementById('imgBox');
let qrImage = document.getElementById('qrImage');

function generateQR() {
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text.value}`
    imgBox.classList.add('fade');
}



const hello = btn.addEventListener('click', () => generateQR());
text.addEventListener('keydown', (e) => {
    if(e.key === "Enter"){
        console.log(text.value);
        generateQR();
    }
})