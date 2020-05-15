const stc = require("stc");
const htmlCompress = require("stc-html-compress");
const cssCombine = require("stc-css-combine");
const cssCompress = require("stc-css-combine");
const uglify = require("stc-uglify");
stc.config({
  include: ["firekylin"],
  outputPath: 'themes',
  product: "speech",
  tpl: {
    engine: "nunjucks",
    ld: ["{{", "{%", "{="],
    rd: ["}}", "%}", "=}"],
  },
});
stc.workflow({
  uglify: { plugin: uglify, include: /\.js$/, options: {} },
  cssCombine: { plugin: cssCombine, include: /\.css$/, options: {} },
  cssCompress: { plugin: cssCompress, include: /\.css$/, options: {} },
  htmlCompress: { plugin: htmlCompress, include: /\.html$/, options: {} },
});
stc.start(); // 启动工作流程
