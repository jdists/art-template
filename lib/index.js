"use strict";
var artTemplate = require("art-template");
module.exports = (function (content, attrs, scope) {
    if (!content) {
        return content;
    }
    var render = artTemplate.compile(content);
    var data = null;
    if (attrs.data) {
        data = scope.execImport(attrs.data);
    }
    return render(data);
});
