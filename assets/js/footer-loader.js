(function () {
    var placeholder = document.getElementById('footer-placeholder');
    if (!placeholder) return;

    fetch('footer.html')
        .then(function (res) { return res.text(); })
        .then(function (html) {
            placeholder.outerHTML = html;
            document.dispatchEvent(new Event('footerLoaded'));
        })
        .catch(function (err) { console.error('Footer failed to load:', err); });
})();
