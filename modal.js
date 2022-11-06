const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

/*Below throughout the code the reference "modal" is for Bangkok, "modal1" for Phuket , and "modal2" for Pattaya */

/*The code is a snippet written to enable a user to open up the modal when the user clicks on the button.*/ 

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal1 = document.querySelector(button.dataset.modalTarget)
    openModal(modal1)
  })
})

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal2 = document.querySelector(button.dataset.modalTarget)
    openModal(modal2)
  })
})

/*The code  uses document.querySelectorAll to find all of the .modal.active elements on the page, which are then closed
 using closeModal().The code would close all the modals when a user clicks on the active one.*/

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal1.active')
  modals.forEach(modal1 => {
    closeModal(modal1)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal2.active')
  modals.forEach(modal2 => {
    closeModal(modal2)
  })
})


/*The code is trying to close the modal when a user clicks on the button.The code first finds all of the buttons that are in
 the modal and then listens for click events on each one. When a user clicks on one of these buttons, it calls closeModal() 
 which closes the modal.*/


closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal1 = button.closest('.modal1')
    closeModal(modal1)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal2 = button.closest('.modal2')
    closeModal(modal2)
  })
})



 /*  This is a function to open a modal with the class "active" if it is not null, when the user clicks on the button */

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function openModal(modal1) {
  if (modal1 == null) return
  modal1.classList.add('active')
  overlay.classList.add('active')
}

function openModal(modal2) {
  if (modal2 == null) return
  modal2.classList.add('active')
  overlay.classList.add('active')
}



/*   This function is writtem to close a modal when the close button is clicked or when somewhere else is clicked (overlay is
  used for this) by removing the element that has the class active  if modal is not null.*/

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

function closeModal(modal1) {
  if (modal1 == null) return
  modal1.classList.remove('active')
  overlay.classList.remove('active')
}

function closeModal(modal2) {
  if (modal2 == null) return
  modal2.classList.remove('active')
  overlay.classList.remove('active')
}