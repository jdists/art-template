# @jdists/art-template

art-template as jdists processor

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coverage-image]][coverage-url]

* @see [jdists](https://github.com/zswang/jdists)

* @see [art-template](https://github.com/aui/art-template)

## Example

```html
<!--data>
kids:
  - name: Jimmy
    age: '12'
  - name: Sally
    age: '4'
</data-->

<!--jdists encoding="art-template" data="?data"-->
<ul>
  {{each kids item}}
  <li>{{item.name}} is {{item.age}}</li>
  {{/each}}
</ul>
<!--/jdists-->

<!--art-template data="?data"-->
<ul>
  {{each kids item}}
  <li>{{item.name}} is {{item.age}}</li>
  {{/each}}
</ul>
<!--/art-template-->
```

## License

MIT © [zswang](http://weibo.com/zswang)

[npm-url]: https://badge.fury.io/js/%40jdists%2Fart-template
[npm-image]: https://badge.fury.io/js/%40jdists%2Fart-template.svg
[travis-url]: https://travis-ci.org/jdists/art-template
[travis-image]: https://travis-ci.org/jdists/art-template.svg?branch=master
[coverage-url]: https://coveralls.io/github/jdists/art-template?branch=master
[coverage-image]: https://coveralls.io/repos/jdists/art-template/badge.svg?branch=master&service=github