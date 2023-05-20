import React from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import Toolbar from "./Toolbar";

function TextEditor() {
  return (
    <>
      <Toolbar />
      <Editor
        toolbarClassName="flex sticky !justify-center mx-auto mt-5"
        editorClassName="bg-white shadow-lg max-w-5xl mx-auto border p-10 min-h-screen my-6"
      />
    </>
  );
}

export default TextEditor;
