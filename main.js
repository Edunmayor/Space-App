//toggle icon navbar
let menuIcon = document.getElementById('menu-icons');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


//scroll section active
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec. offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
             

        }
    })
}

//sticky navbar
let header = document.querySelector('header');

header.classList.toggle('sticky', window.scrollY > 100);


// destination navbar
const toggleLinks = document.querySelectorAll('.toggle-link');
const contents = document.querySelectorAll('.content');

toggleLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    
    const targetId = this.getAttribute('data-target');
    const targetContent = document.getElementById(targetId);
    
    contents.forEach(content => {
      content.style.display = 'none';
    });
    
    targetContent.style.display = 'flex';
  });
});
