function revealOnce() {
    let elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => {
      let elementTop = el.getBoundingClientRect().top;
      let windowHeight = window.innerHeight;
  
      if (elementTop < windowHeight - 100) {
        el.classList.add("active");
        el.classList.remove("reveal");
      }
    });
}

export {revealOnce};