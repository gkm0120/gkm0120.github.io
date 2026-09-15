// Phase 2.2: Scroll reveal animation using IntersectionObserver
(function () {
  var supportsIntersectionObserver = 'IntersectionObserver' in window;
  if (!supportsIntersectionObserver) return;

  document.addEventListener('DOMContentLoaded', function () {
    var posts = document.querySelectorAll('.home .post, .archive .post');
    if (!posts.length) return;

    // Add scroll-reveal class
    posts.forEach(function (post) {
      post.classList.add('scroll-reveal');
    });

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('scroll-reveal--visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    posts.forEach(function (post) {
      observer.observe(post);
    });
  });
})();
