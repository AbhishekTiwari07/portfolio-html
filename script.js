const portfolioItems = document.querySelectorAll('.item-wrapper');

portfolioItems.forEach(portfolioItems =>{
    portfolioItems.addEventListener('mouseover',()=>{
        portfolioItems.childNodes[1].classList.add('img-darken');
    })
    portfolioItems.addEventListener('mouseout',()=>{
        portfolioItems.childNodes[1].classList.remove('img-darken');
    })
})