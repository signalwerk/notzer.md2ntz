const MarkdownIt = require( 'markdown-it');
const { html2ntz } = require("../html2ntz/");
var fs = require("fs");

class md2ntz {
  // constructor() {
  // }

  // generate the ast
  parse(txt, cb) {
    let md = new MarkdownIt({
  html:         true
});
    let html = `<html><head><link rel="stylesheet" href="styles.css"></head><body><div class="root">${md.render(txt)}</div></body></html>`;
    fs.writeFileSync("./catalogueMD.html", html);
    let h2ntz = new html2ntz();

    h2ntz.parse(html, AST => {
      cb(AST);
    })

  }
}

var exports = (module.exports = {
  md2ntz
});
