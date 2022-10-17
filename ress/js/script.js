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

            setTimeout(() =>{
                const saveUrl = qr.querySelector('img').src;
                createSaveBtn(saveUrl);
            })

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
    const downloadCode = document.getElementById("save-link");
    if (downloadCode) {
        downloadCode.remove();
    }
}

const createSaveBtn = (saveUrl) => {
    const link = document.createElement('a')
    link.id = "save-link";
    link.classList = "bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 rounded w-1/2 m-auto my-5";
    link.href = saveUrl;
    link.download = 'qrcode';
    link.innerHTML = "Save Image";
    document.getElementById("generated").appendChild(link);
}


form.addEventListener('submit', onGenerateSubmit)