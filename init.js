atom.workspace.observeTextEditors(function(editor) {
  foldCode(editor);
});

function foldCode(editor) {
  const currentGrammar = editor.getGrammar().name;

  if (currentGrammar === 'MagicPython') {
    editor.foldAllAtIndentLevel(1);
  }

  if (currentGrammar === 'Babel ES6 JavaScript') {
    editor.foldAllAtIndentLevel(0);
  }

  if (_in(currentGrammar, ['Less', 'SCSS'])) {
    editor.foldAllAtIndentLevel(0);
  }
}

function _in(element, array) {
  return array.indexOf(element) >= 0 ? true : false;
}
