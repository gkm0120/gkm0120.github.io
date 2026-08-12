// Phase 3.5: Back-to-top progress ring
(function () {
  var ring = document.querySelector('.back-to-top .progress-ring-fill');
  if (!ring) return;

  var circumference = 2 * Math.PI * 20; // r=20
  ring.style.strokeDasharray = circumference;
  ring.style.strokeDashoffset = circumference;

  var scrollPercent = document.getElementById('scrollpercent');
  var backToTop = document.querySelector('.back-to-top');

  function updateProgress() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var percent = scrollHeight > 0 ? Math.round((scrollTop / scrollHeight) * 100) : 0;
    var offset = circumference - (percent / 100) * circumference;
    ring.style.strokeDashoffset = offset;

    if (scrollPercent) {
      var span = scrollPercent.querySelector('span');
      if (span) span.textContent = percent;
    }
  }

  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress, { passive: true });
  updateProgress();
})();
