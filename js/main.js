document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const section = document.getElementById(targetId);
      if (section) {
        window.scrollTo({
          top: section.offsetTop - 70, 
          behavior: 'smooth'
        });
      }
    });
  });
  
  
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a');
  
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 80;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });
  
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(current)) {
        link.classList.add('active');
      }
    });
  });
  
  
  const viewWorkBtn = document.querySelector('.btn');
  if (viewWorkBtn) {
    viewWorkBtn.addEventListener('click', () => {
      console.log("View My Work button clicked!");
    });
  }
  