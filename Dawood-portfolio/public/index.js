
window.onscroll = function() {
    const heading = document.querySelector('.h2-heading');
    heading.classList.add('animate');
};


document.addEventListener("DOMContentLoaded", function () {
    const observerOptions = {
        threshold: 0.1 
    };

    const typingObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    typingObserver.observe(document.querySelector('.persona'));
});





document.addEventListener("DOMContentLoaded", function () {
    const observerOptions = {
        threshold: 0.1
    };

    const fadeInOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);


    document.querySelectorAll('.strategy-icon, .h3-heading, .strategy-text').forEach(element => {
        fadeInOnScroll.observe(element);
    });
});

















document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('flip');
            } else {
                entry.target.classList.remove('flip');
            }
        });
    }, { threshold: 0.5 });

    cards.forEach(card => {
        observer.observe(card);
    });
});






function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    const totalDuration = 10000; 

    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const increment = target / (totalDuration / 20); 

        const updateCount = () => {
            const count = +counter.innerText;
            
            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 20); 
            } else {
                counter.innerText = target;
                if (target > 1) {
                    counter.innerText += '+'; 
                }
            }
        };

        const options = {
            threshold: 0.5
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    counter.innerText = '0'; 
                    setTimeout(updateCount, 500); 
                }
            });
        }, options);

        observer.observe(counter);
    });
}


window.addEventListener('DOMContentLoaded', animateCounters);
window.addEventListener('scroll', animateCounters);


document.addEventListener("DOMContentLoaded", function () {
    const observerOptions = {
        threshold: 0.1
    };

 
    const typingObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    
    typingObserver.observe(document.querySelector('.contact'));
});



const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('slide-up');
        }
    });
});


const sectionTitle = document.querySelector('#section-title');


sectionObserver.observe(sectionTitle);


const cardsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('slide-up');
        }
    });
});


const cardsContainer = document.querySelector('.cards-container');


cardsObserver.observe(cardsContainer);




document.addEventListener('DOMContentLoaded', function() {
    const getInTouch = document.querySelector('.get-in-touch');
    const colorForm = document.querySelector('.colorForm');

    function checkVisibility() {
        const scrollPosition = window.scrollY + window.innerHeight;
        const getInTouchTop = getInTouch.getBoundingClientRect().top + window.scrollY;
        const colorFormTop = colorForm.getBoundingClientRect().top + window.scrollY;

        if (scrollPosition > getInTouchTop) {
            getInTouch.classList.add('visible');
        }
        if (scrollPosition > colorFormTop) {
            colorForm.classList.add('visible');
        }
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility();
});


document.getElementById("year").textContent = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slide-up');
            }
        });
    });

    const footerElements = document.querySelectorAll('.details, .fastDigital360Container, .svg-listFooter, .copyright');
    footerElements.forEach(element => observer.observe(element));
});


document.addEventListener("DOMContentLoaded", function () {
    const observerOptions = {
        threshold: 0.1
    };


    const typingObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    typingObserver.observe(document.querySelector('.youtubeTitle'));
});



window.onload = function() {
    document.querySelector('.pages ul').classList.add('show');
};



document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slide-up');
            }
        });
    });

    const pageElements = document.querySelectorAll('.pages ul');
    pageElements.forEach(element => observer.observe(element));

    const footerElements = document.querySelectorAll('.details, .fastDigital360Container, .svg-listFooter, .copyright');
    footerElements.forEach(element => observer.observe(element));
});


document.getElementById('contactForm').addEventListener('submit', function() {
    setTimeout(() => {
      this.reset(); 
    }, 1000); 
  });


