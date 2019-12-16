## `<qr-scan>`

[Demo](https://mantou132.github.io/qr-scan/build/hello/)

## develop

install [rust](https://www.rust-lang.org/)

```bash
npm i
npm run example
```

## usage

```html
<qr-scan width=300 height=300 bound=true type=url></qr-scan>
```

```css
qr-scan::part(bound) {
  outline-color: blue;
}
```

```js
document.querySelector('qr-scan').addEventListener('success', console.log);
document.querySelector('qr-scan').addEventListener('notallow', console.log);
```

### api

```js
import QrScan from 'qr-scan';
new QrScan(300, 300).detect().then(console.log);
```