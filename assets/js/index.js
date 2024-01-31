particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 346,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0
        }
      },
      "opacity": {
        "value": 1,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 3,
          "opacity_min": 0,
          "sync": false
        }
      },
      "size": {
        "value": 2,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 4,
          "size_min": 0.3,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false
      },
      "move": {
        "enable": true,
        "speed": 1, 
        "direction": "top",
        "random": true,
        "straight": false, 
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 600
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false
        },
        "onclick": {
          "enable": false
        },
        "resize": true
      }
    },
    "retina_detect": true
  });
  




$('.logos-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  arrows: false,
  dots: false,
  pauseOnHover: false,
  responsive: [{
  breakpoint: 768,
  settings: {
  slidesToShow: 3
  }
  }, {
  breakpoint: 520,
  settings: {
  slidesToShow: 2
  }
  }]
  });


  document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    for (const link of links) {
        link.addEventListener("click", clickHandler);
    }
    
    function clickHandler(e) {
        e.preventDefault();
        const href = this.getAttribute("href");
        const target = document.querySelector(href);
        target.scrollIntoView({
            behavior: "smooth",
            block: "start", 
            inline: "nearest" 
        });
    }
});






function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}


function handleScroll() {
  const cards = document.querySelectorAll('.section4 .card');

  cards.forEach(card => {
      if (isElementInViewport(card)) {
          card.classList.add('visible');
      } else {
          card.classList.remove('visible');
      }
  });
}

window.addEventListener('scroll', handleScroll);

window.addEventListener('load', handleScroll);
