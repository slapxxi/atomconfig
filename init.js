atom.workspace.observeTextEditors(function(editor) {
  foldCode(editor);
});

function foldCode(editor) {
  const currentGrammar = editor.getGrammar().name;

  if (currentGrammar === 'MagicPython') {
    editor.foldAllAtIndentLevel(1);
  }

  if (currentGrammar === 'Babel ES6 JavaScript') {
    // const file = editor.buffer.file;
    // if (file.path.endsWith('.spec.js')) {
    //   editor.foldAllAtIndentLevel(1);
    // } else {
    editor.foldAllAtIndentLevel(0);
    // }
  }

  if (_contains(currentGrammar, ['Less', 'SCSS'])) {
    editor.foldAllAtIndentLevel(0);
  }
}

function _contains(element, array) {
  return array.indexOf(element) >= 0 ? true : false;
}
