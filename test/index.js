
global.processor = require('../')
      

describe("src/index.ts", function () {
  var assert = require('should');
  var util = require('util');
  var examplejs_printLines;
  function examplejs_print() {
    examplejs_printLines.push(util.format.apply(util, arguments));
  }
  
  

  it("processor():base", function () {
    examplejs_printLines = [];
  let attrs = {
    data: '#name',
  }
  let scope = {
    execImport: function (importion) {
      return {
        name: 'tom',
        age: 13,
      }
    },
  }
  examplejs_print(processor('<b>{{name}} - {{age}}</b>', attrs, scope))
  assert.equal(examplejs_printLines.join("\n"), "<b>tom - 13</b>"); examplejs_printLines = [];
  });
          
  it("processor():data is undefined", function () {
    examplejs_printLines = [];
  let attrs = {}
  let scope = {}
  examplejs_print(processor('{{1 + 2}}', attrs, scope))
  assert.equal(examplejs_printLines.join("\n"), "3"); examplejs_printLines = [];
  });
          
  it("processor():content is null", function () {
    examplejs_printLines = [];
  examplejs_print(processor(null))
  assert.equal(examplejs_printLines.join("\n"), "null"); examplejs_printLines = [];
  });
          
});
         