function compile() {
  document.body.onkeyup = function() {
    var code = document.getElementById("code").contentWindow.document;
    console.log(html.value);
    code.open();
    code.writeln(
      edt1.getValue() +
        "<style>" +
        edt2.getValue() +
        "</style>" +
        "<script>" +
        edt3.getValue() +
        "</script>"
    );
    code.close();
  };
}

var edt1 = CodeMirror.fromTextArea(document.getElementById("html"), {
  lineNumbers: true,
  mode: "xml",
  htmlMode: true
});
var edt2 = CodeMirror.fromTextArea(document.getElementById("css"), {
  lineNumbers: true,
  mode: "css"
});
var edt3 = CodeMirror.fromTextArea(document.getElementById("js"), {
  lineNumbers: true,
  mode: "javascript"
});
compile();
