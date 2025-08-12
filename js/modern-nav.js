(function() {
    'use strict';
    
    var navbar = document.querySelector('.navbar-custom');
    var lastScrollTop = 0;
    var scrollThreshold = 100;
    
    function handleScroll() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > scrollThreshold) {
            navbar.classList.remove('navbar-transparent');
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.add('navbar-transparent');
            navbar.classList.remove('navbar-scrolled');
        }
        
        if (scrollTop > lastScrollTop && scrollTop > 300) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    }
    
    function animatePostsOnScroll() {
        var posts = document.querySelectorAll('.post-preview');
        var windowHeight = window.innerHeight;
        
        posts.forEach(function(post) {
            var postTop = post.getBoundingClientRect().top;
            var postBottom = post.getBoundingClientRect().bottom;
            
            if (postTop < windowHeight * 0.9 && postBottom > 0) {
                post.classList.add('slide-up');
            }
        });
    }
    
    function smoothScrollToAnchor() {
        document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                var target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
    
    function init() {
        if (window.pageYOffset === 0) {
            navbar.classList.add('navbar-transparent');
        }
        
        window.addEventListener('scroll', function() {
            handleScroll();
            animatePostsOnScroll();
        });
        
        animatePostsOnScroll();
        smoothScrollToAnchor();
        
        document.body.classList.add('fade-in');
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();