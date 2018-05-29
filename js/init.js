document.addEventListener('DOMContentLoaded', function () {
    var html = document.documentElement || window || document.body;
    var windowWidth = html.clientWidth;
    windowWidth = windowWidth > 640 ? 640 : windowWidth;
    html.style.fontSize = windowWidth / 6.4 + 'px';
}, false);
let baseUrl =  'tp5/public/index.php/wx/Company/';




