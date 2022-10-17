const form = document.getElementById("generate-form");
const qr = document.getElementById("qrcode");


// function and event listner for geting the value of the input
const onGenerateSubmit = (e) =>{
    e.preventDefault();

    clearUI();

    const url = document.getElementById('url').value;
    const size = document.getElementById('size').value;

    if (url === '') {
        alert('enter a url')
    }
    else{
        showSpinner();

        setTimeout(()=>{
            hideSpinner();

            generateQRCode(url, size);

        }, 1000);
    };
};


// function for the qr code
const generateQRCode = (url, size) => {
    const qrcode = new QRCode('qrcode', {
      text: url,
      width: size,
      height: size,
    });
  };



// function for hide and show spinner
const showSpinner = () =>{
    document.getElementById("spinner").style.display="block"
}

const hideSpinner = () =>{
    document.getElementById("spinner").style.display="none"
}

hideSpinner();

const clearUI = () =>{
    qr.innerHTML = "";
}


form.addEventListener('submit', onGenerateSubmit)