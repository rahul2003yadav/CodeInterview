import React, { useEffect, useRef } from "react";
import Editor from "@monaco-editor/react";

const EditorPage = ({
  roomId,
  copyRoomId,
  copySuccess,
  users,
  typing,
  language,
  handleLanguageChange,
  leaveRoom,
  code,
  handleCodeChange,
  runCode,
  outPut,
  meeting,
}) => {


  const meetingContainer = useRef(null);

  useEffect(() => {
    if (meeting && meetingContainer.current) {
      meeting(meetingContainer.current);
    }
  }, [meeting]);


  return (
    <div className="editor-container">
      <div className="sidebar">
        <div className="room-info">
          <h2>Code Room: {roomId}</h2>
          <button className="copy-button" onClick={copyRoomId}>
            Copy Id
          </button>
          {copySuccess && <span className="copy-success">{copySuccess}</span>}
        </div>
        <p className="typing-indicator">{typing}</p>
        
        <div className="users">
          <h3>Users in Room</h3>
          <ul>
            {users.map((user, index) => (
              <li key={index}>{user.slice(0, 8)}...</li>
            ))}
          </ul>
        </div>

        <div className="meeting" ref={meetingContainer}/>
        

        
        <div className="leave-lang-btn">
          <select className="language-selector" value={language} onChange={handleLanguageChange}>
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="cpp">C++</option>
          </select>
          <button className="leave-button" onClick={leaveRoom}>
            Leave Room
          </button>
        </div>
        
      </div>

      <div className="editor-wrapper">
        <Editor
          height={"60%"}
          defaultLanguage={language}
          language={language}
          value={code}
          onChange={handleCodeChange}
          theme="vs-dark"
          options={{
            minimap: { enabled: false },
            fontSize: 14,
          }}
        />
        <button className="run-btn" onClick={runCode}>
          Execute
        </button>
        <textarea
          className="output-console"
          value={outPut}
          readOnly
          placeholder="Output will appear here ..."
        />
      </div>
    </div>
  );
};

export default EditorPage;
