var modal =document.getElementById('PopupEmpresa');
// get open modal button
var modalBtn = document.getElementById('modalBtn');

var closeBtn = document.getElementsByClassName('contenidoPopupEmpresas-CloseBtn')[0];

// Listen for click
modalBtn.addEventListener('click',openModal);

// Listen for close click
closeBtn.addEventListener('click', closeModal);


function openModal(){
    modal.style.display = 'block';
}

function closeModal(){
    modal.style.display = 'none';
}