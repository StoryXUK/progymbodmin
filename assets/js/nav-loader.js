(function () {
    var placeholder = document.getElementById('nav-placeholder');
    if (!placeholder) return;

    fetch('nav.html')
        .then(function (res) { return res.text(); })
        .then(function (html) {
            placeholder.outerHTML = html;

            // Highlight the active nav link based on current page filename
            var page = window.location.pathname.split('/').pop() || 'index.html';
            document.querySelectorAll('.main-menu a, .mobile-menu a').forEach(function (link) {
                if (link.getAttribute('href') === page) {
                    link.closest('li').classList.add('active');
                }
            });

            // Signal that the nav is in the DOM so main.js can initialise
            document.dispatchEvent(new Event('navLoaded'));
        })
        .catch(function (err) { console.error('Nav failed to load:', err); });
})();
