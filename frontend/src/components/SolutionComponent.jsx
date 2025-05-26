import React, { useEffect } from 'react'
import { Editor, useMonaco } from '@monaco-editor/react'
import myCustomTheme from '../pages/codeEditorTheme';

function SolutionComponent({language, value}) {
  const monaco = useMonaco();

  useEffect(() => {
    if(monaco){
      monaco.editor.defineTheme('myCustomTheme', myCustomTheme);
      monaco.editor.setTheme('myCustomTheme');
    }
  },[monaco])

  return (
    <div className='h-full bg-[#242424] p-2'>
      <Editor language={language.toLowerCase()} theme="myCustomTheme" value={value} height={"100%"}  width={"100%"} options={{
              minimap: { enabled: false },
              readOnly:true,
              fontFamily: 'JetBrains Mono',
              fontSize: 14,
              lineNumbers: "on",
              roundedSelection: false,
              scrollBeyondLastLine: false,
              automaticLayout: true,
              renderLineHighlight: "none",
              wordWrap: "on",
            }}></Editor>
    </div>
  )
}

export default SolutionComponent