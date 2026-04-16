(function () {
    var placeholder = document.getElementById('footer-placeholder');
    if (!placeholder) return;

    fetch('footer.html')
        .then(function (res) { return res.text(); })
        .then(function (html) {
            placeholder.outerHTML = html;
        })
        .catch(function (err) { console.error('Footer failed to load:', err); });
})();
