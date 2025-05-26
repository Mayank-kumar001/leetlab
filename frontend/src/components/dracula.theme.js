const vercelDarkTheme = {
  base: 'vs-dark',
  inherit: true,
  rules: [
    { token: '', foreground: 'e7d7c1', background: '1c1b18' },
    { token: 'comment', foreground: 'a58d73', fontStyle: 'italic' },   // muted chai spice
    { token: 'string', foreground: 'd9a066' },                         // warm amber
    { token: 'keyword', foreground: 'ce9178', fontStyle: 'bold' },     // soft cinnamon
    { token: 'number', foreground: 'b47109' },                         // golden tea leaf
    { token: 'regexp', foreground: 'd0846c' },                         // dusty rose
    { token: 'operator', foreground: 'e7d7c1' },
    { token: 'variable', foreground: 'e7d7c1' },
    { token: 'function', foreground: 'e6b450' },                       // saffron tone
    { token: 'type', foreground: 'f4bf75' },                           // turmeric warmth
  ],
  colors: {
    'editor.background': '#1c1b18',
    'editor.foreground': '#e7d7c1',
    'editorCursor.foreground': '#f4bf75',
    'editor.lineHighlightBackground': '#2a2925',
    'editorLineNumber.foreground': '#6b6651',
    'editor.selectionBackground': '#3d392f',
    'editor.inactiveSelectionBackground': '#2f2c25',
    'editorIndentGuide.background': '#2f2c25',
    'editorIndentGuide.activeBackground': '#a58d73',
    'editorWhitespace.foreground': '#3e3a30',
  },
};

export default vercelDarkTheme;
