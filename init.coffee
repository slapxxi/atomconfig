# atom.workspace.observeTextEditors (editor) ->
#   editor.onDidSave ->
#     console.log "Saved! #{editor.getPath()}"
foldCode = (editor, level=1) ->
  editor.foldAllAtIndentLevel(level)

atom.workspace.observeTextEditors (editor) ->
  if editor.getGrammar().name is 'MagicPython'
    foldCode(editor)
  if editor.getGrammar().name is 'Babel ES6 JavaScript'
    foldCode(editor, 0)
