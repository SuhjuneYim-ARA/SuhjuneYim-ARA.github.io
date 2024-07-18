const modal = document.getElementById('modal');
const parent = document.getElementById('parentHTML');

function OpenModalOnLoad(){
    parent.classList.remove('modal-is-closing');
    setTimeout(() => {
        parent.classList.add('modal-is-opening');
        parent.classList.add('modal-is-open');
        modal.showModal(); 
    }, 0);
}

OpenModalOnLoad();