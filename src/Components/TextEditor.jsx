import React from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import Toolbar from "./Toolbar";
import Sidebar from "./Sidebar";

function TextEditor() {
  return (
    <>
      <Toolbar />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Editor
          toolbarClassName="flex sticky top-0 !justify-center mx-auto mt-5"
          editorClassName="bg-white shadow-lg max-w-5xl mx-auto border p-10 min-h-screen my-6"
        />
        <Sidebar />
      </div>
    </>
  );
}

export default TextEditor;
