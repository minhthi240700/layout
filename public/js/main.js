let items = document.querySelectorAll('.prd .prd-item')

items.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap prd by using first child
        	next = items[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})




var navBar = document.querySelector('.display')
  var menu_container = document.querySelector('.menu-container')
  
  navBar.onclick = function() {
    menu_container.classList.toggle('active')
  }

  

  var changed = document.querySelectorAll('.title-change')
  function activeChange() {
    changed.forEach((item) => 
    item.classList.remove('changed'));
    this.classList.add('changed');
  }

  changed.forEach((item) => item.addEventListener('click', activeChange))


  // JS slider
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
