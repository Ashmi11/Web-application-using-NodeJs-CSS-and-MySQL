/* This javascript file is used to make the application responsive (the application remains in a redable and presentable state even 
    when the screen is minimised)*/


/* The code starts by creating a variable called menu.
 This is the element that will be clicked on to toggle between active and inactive states.*/

const menu=document.querySelector('#mobile-menu');

/*The next line of code creates a new variable called menuLinks, which stores all links within the navbar__menu class.*/
const menuLinks= document.querySelector('.navbar__menu');


/*The code will toggle the class of the menu.classList object to active and then back to is-active when the user clicks on it.*/

const mobileMenu=() =>{
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');

}

/*The code then creates an event listener for when this menu is clicked on, which calls another function called mobileMenu()*/
menu.addEventListener('click',mobileMenu);



 