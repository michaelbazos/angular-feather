## angular-feather-icons

[![npm](https://img.shields.io/npm/v/angular-feather-icons.svg)]()
[![npm](https://img.shields.io/npm/l/angular-feather-icons.svg)]()

### Description

Simply beautiful SVG icons for your angular applications. 

Icons are designed by [Cole Bemis](https://github.com/colebemis/).

### Usage

_1. Install the package_

```sh
npm install angular-feather-icons
```

_2. Import the icons you need_

Import the icons _a la carte_ in the angular module of your needs.

```ts
@NgModule({
  imports: [
    IconAlertTriangle
  ]
})
export class MyIconModule { }
```

_3. Use it in template_

```html
<i-alert-triangle></i-alert-triangle>
```
    
Refer to the website of [Feather Icons](https://feathericons.com/) for the whole list of icons.


### License

MIT © [Michael Bazos](mailto:micabazos@gmail.com)
