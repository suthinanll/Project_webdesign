function shoppage(page){
    document.querySelectorAll('.content').forEach(div => {
        div.style.display = 'none';
    });
    document.querySelector(`#${page}`).style.display = 'flex'; 
}

document.addEventListener('DOMContentLoaded', function(){
    const navItems = document.querySelectorAll('.nav-itemm');
    const underline = document.querySelector('.underline');

    function setUnderline(element) {
        underline.style.width = element.offsetWidth + 'px';
        underline.style.left = element.offsetLeft + 'px';
    }

    navItems.forEach(item => {
        item.onclick = function(){
            shoppage(this.dataset.page);
            setUnderline(this);
            navItems.forEach(navItem => navItem.style.fontWeight = 'normal');
            this.style.fontWeight = 'bold';
        }
    });

    // Set initial state
    setUnderline(navItems[0]);
    navItems[0].style.fontWeight = 'bold';
    shoppage('shop');
});