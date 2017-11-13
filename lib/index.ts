import * as artTemplate from 'art-template'
import * as jdistsUtil from 'jdists-util'
import * as jsyaml from 'js-yaml'
interface IArtTemplateAttrs extends jdistsUtil.IAttrs {
  /**
   * 数据来源
   */
  data?: string
  /**
   * 扩展函数
   */
  extend?: string
}
/**
 * artTemplate 模板渲染
 *
 * @param content 文本内容
 * @param attrs 属性
 * @param attrs.data 数据项，支持 JSON 和 YAML
 * @param attrs.extend 扩展函数
 * @param attrs.rework 是否重新编译
 * @param scope 作用域
 * @param scope.execImport 导入数据
 * @param scope.compile 编译 jdists 文本
 * @return 返回渲染后的结果
 * @example processor():base
  ```js
  let attrs = {
    data: '#name'
  }
  let scope = {
    execImport: function (importion) {
      return `
        name: tom
        age: 13
      `
    },
  }
  console.log(processor('<b>{{name}} - {{age}}</b>', attrs, scope))
  // > <b>tom - 13</b>
  ```
 * @example processor():execImport is object
  ```js
  let attrs = {
    data: '#name',
    rework: 'No'
  }
  let scope = {
    execImport: function (importion) {
      return {
        name: 'tom',
        age: 13,
      }
    },
  }
  console.log(processor('<b>{{name}} - {{age}}</b>', attrs, scope))
  // > <b>tom - 13</b>
  ```
 * @example processor():data is undefined
  ```js
  let attrs = {}
  let scope = {}
  console.log(processor('{{1 + 2}}', attrs, scope))
  // > 3
  ```
 * @example processor():content is null
  ```js
  console.log(processor(null))
  // > null
  ```
 */
export = (function (content: string, attrs: IArtTemplateAttrs, scope: jdistsUtil.IScope): string {
  if (!content) {
    return content
  }
  let render = artTemplate.compile(content)
  let data = null
  if (attrs.data) {
    data = scope.execImport(attrs.data)
    if (typeof data === 'string') {
      data = jsyaml.safeLoad(data)
    }
  }
  return render(data)
}) as jdistsUtil.IProcessor