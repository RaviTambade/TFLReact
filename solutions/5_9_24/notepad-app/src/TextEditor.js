import React, { useState, useCallback } from 'react';

const TextEditor = () => {

  const [text, setText] = useState('');
  const [clipboard, setClipboard] = useState('');
  const [history, setHistory] = useState([]);
  const [redoStack, setRedoStack] = useState([]);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      console.log('Text copied to clipboard');
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  }, [text]);

  const handlePaste = useCallback(async () => {
    try {
      const pastedText = await navigator.clipboard.readText();
      setText((prevText) => {
        const newText = prevText + pastedText;
        return newText;
      });
      console.log('Text pasted from clipboard');
    } catch (err) {
      console.error('Failed to read clipboard contents: ', err);
    }
  }, []);

  const handleCut = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      setClipboard(text);
      setText(''); // Clear the text after copying
      console.log('Text cut (copied and deleted from input)');
    } catch (err) {
      console.error('Failed to cut text: ', err);
    }
  }, [text]);

  const handleUndo = useCallback(() => {
    setHistory((prevHistory) => {
      if (prevHistory.length === 0) return prevHistory;

      const lastState = prevHistory[prevHistory.length - 1];
      setRedoStack((prevRedoStack) => [text, ...prevRedoStack]);
      setText(lastState);
      return prevHistory.slice(0, -1);
    });
  }, [text]);

  const handleRedo = useCallback(() => {
    setRedoStack((prevRedoStack) => {
      if (prevRedoStack.length === 0) return prevRedoStack;

      const nextState = prevRedoStack[0];
      setHistory((prevHistory) => [...prevHistory, text]);
      setText(nextState);
      return prevRedoStack.slice(1);
    });
  }, [text]);

  const handleTextChange = useCallback((event) => {
    const newText = event.target.value;
    setHistory((prevHistory) => [...prevHistory, text]);
    setText(newText);
    setRedoStack([]); // Clear redo stack when new text is added
  }, [text]);

  return (
    <div>
      <textarea value={text} onChange={handleTextChange} rows="4" cols="50" />
      <br />
      <button onClick={handleCopy}>Copy</button>
      <button onClick={handlePaste}>Paste</button>
      <button onClick={handleCut}>Cut</button>
      <button onClick={handleUndo} disabled={history.length === 0}>Undo</button>
      <button onClick={handleRedo} disabled={redoStack.length === 0}>Redo</button>
    </div>
  );
};

export default TextEditor;