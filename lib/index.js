"use strict";
var artTemplate = require("art-template");
var jsyaml = require("js-yaml");
module.exports = (function (content, attrs, scope) {
    if (!content) {
        return content;
    }
    var render = artTemplate.compile(content);
    var data = null;
    if (attrs.data) {
        data = scope.execImport(attrs.data);
        if (typeof data === 'string') {
            data = jsyaml.safeLoad(data);
        }
    }
    return render(data);
});
