/* when the user clicks on the bbutton toggle showing and hiding the dropdown content*/ 

function dropMenu(){
    document.getElementById('myDropdown').classList.toggle('show');
}

/* close dropdown menu if user clicks outside of it */
window.onclick=function(event) {
    if (!event.target.matches('.dropbtn')){
        let dropdowns=document.getElementsByClassName('dropdown-content');
        let i;
        for (i=0; i<dropdowns.length; i++) {
            let openDropdown=dropdowns[i];
            if (openDropdown.classList.contains('show')){
                openDropdown.classList.remove('show');
            }
        }
    }
}

