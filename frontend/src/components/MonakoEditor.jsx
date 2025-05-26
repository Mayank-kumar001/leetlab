import React, { useEffect } from 'react'
import Editor from '@monaco-editor/react';
import { useMonaco } from '@monaco-editor/react';
import vercelDarkTheme from './dracula.theme'

 function MonakoEditor() {
 
  return (
    <>
      <Editor height={"100px"} theme="vs-dark" language={"javascript"} options={{
        fontFamily: 'JetBrains Mono',
        fontSize: 14,
        lineHeight: 22,
        fontLigatures: true,
        minimap: { enabled: false },
      }}/>
    </>
  )
}

export default MonakoEditor