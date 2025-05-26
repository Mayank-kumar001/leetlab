const myCustomTheme = {
  base: 'vs-dark',
  inherit: true,
  rules: [
    { token: '', foreground: 'ffffff' }, // default text
    { token: 'comment', foreground: '#46474f'},
    { token: 'keyword', foreground: '7b7c83' },
    { token: 'string', foreground: '4ebe96' },
    { token: 'number', foreground: 'ffcb6b' },
    { token: 'type', foreground: 'c792ea' },
    { token: 'function', foreground: '7b7c83' },
    { token: 'identifier', foreground: 'e7e0e0' },
    { token: 'delimiter.parenthesis', foreground: '7b7c83' },
    { token: 'delimiter.bracket', foreground: '7b7c83' },
    { token: 'operator', foreground: '7b7c83' },
    { token: 'tag', foreground: 'ff5370' },
    { token: 'attribute.name', foreground: 'c792ea' },
  ],
  colors: {
    'editor.background': '#131419',
    'editorLineNumber.foreground': '#46474f',
    'editorCursor.foreground': '#ffffff',
    'editorIndentGuide.background': '#2c313c',
    'editorIndentGuide.activeBackground': '#5c6370',
    'editor.selectionBackground': '#3a3f4b',
    'editor.lineHighlightBackground': '#00000000', // removes the "light" line highlight
    'editorLineNumber.activeForeground': '#c5e4fd',
  },
};

export default myCustomTheme;



// {
//   base: 'vs-dark', // or 'vs' for light themes
//   inherit: true,
//   rules: [
//     { token: 'comment', foreground: '32333b' },
//     { token: 'keyword', foreground: '9099a1' },
//     { token: 'number', foreground: 'd4b48c' },
//     { token: 'string', foreground: '4ebe96' },
//     { token: 'type', foreground: 'e5c07b' },
//   ],
//   colors: {
//     'editor.background': '#131419',
//     'editor.foreground': '#131419',
//     'editorLineNumber.foreground': '#32333b',
//     'editorCursor.foreground': '#f5c2e7',
//     'editorIndentGuide.background': '#313244',
//     'editor.selectionBackground': '#45475a',
//     'editor.lineHighlightBackground': '#313244',
//   },
// };