import React, { useEffect, useRef, useState } from 'react';
import hljs from 'highlight.js';
// Import highlighting styles
import 'highlight.js/styles/atom-one-dark.css';

const CodeEditor = ({
  code,
  language,
  onChange,
  height = '400px',
  readOnly = false
}) => {
  const [lineCount, setLineCount] = useState(1);
  const [fontSize, setFontSize] = useState(14);
  const editorRef = useRef(null);
  const previewRef = useRef(null);
  const containerRef = useRef(null);
  
  // Update line numbers when code changes
  useEffect(() => {
    if (code) {
      const lines = code.split('\n').length;
      setLineCount(lines);
    } else {
      setLineCount(1);
    }
  }, [code]);
  
  // Handle syntax highlighting
  useEffect(() => {
    if (previewRef.current && code) {
      previewRef.current.innerHTML = hljs.highlight(code, { language: getLanguageForHighlight(language) }).value;
      
      // Sync scroll position between textarea and preview
      if (editorRef.current) {
        const syncScroll = () => {
          if (previewRef.current && editorRef.current) {
            previewRef.current.scrollTop = editorRef.current.scrollTop;
            previewRef.current.scrollLeft = editorRef.current.scrollLeft;
          }
        };
        
        editorRef.current.addEventListener('scroll', syncScroll);
        return () => {
          if (editorRef.current) {
            editorRef.current.removeEventListener('scroll', syncScroll);
          }
        };
      }
    }
  }, [code, language]);

  // Responsive font size adjustment based on screen size
  useEffect(() => {
    const adjustFontSize = () => {
      if (window.innerWidth < 640) { // sm breakpoint
        setFontSize(12);
      } else if (window.innerWidth < 768) { // md breakpoint
        setFontSize(13);
      } else {
        setFontSize(14);
      }
    };

    // Initial adjustment
    adjustFontSize();

    // Listen for resize events
    window.addEventListener('resize', adjustFontSize);
    return () => window.removeEventListener('resize', adjustFontSize);
  }, []);
  
  // Map language selection to highlight.js language
  const getLanguageForHighlight = (lang) => {
    switch (lang) {
      case 'python': return 'python';
      case 'javascript': return 'javascript';
      case 'cpp': return 'cpp';
      case 'java': return 'java';
      default: return 'plaintext';
    }
  };
  
  // Handle tab key in textarea
  const handleKeyDown = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      
      const start = e.currentTarget.selectionStart;
      const end = e.currentTarget.selectionEnd;
      const value = e.currentTarget.value;
      
      const newValue = value.substring(0, start) + '    ' + value.substring(end);
      
      // Update code
      onChange(newValue);
      
      // Move cursor to correct position after tab
      requestAnimationFrame(() => {
        if (editorRef.current) {
          editorRef.current.selectionStart = editorRef.current.selectionEnd = start + 4;
        }
      });
    }
  };

  // Handle zoom in/out functionality
  const handleZoom = (increase) => {
    setFontSize(prevSize => {
      const newSize = increase ? prevSize + 1 : prevSize - 1;
      return Math.min(Math.max(newSize, 10), 20); // Limit between 10px and 20px
    });
  };

  return (
    <div 
      ref={containerRef}
      className="code-editor-container relative rounded-md overflow-hidden border border-gray-300 group" 
      style={{ height }}
    >
      {/* Line numbers */}
      <div 
        className="absolute left-0 top-0 bottom-0 w-8 sm:w-10 bg-gray-800 text-gray-400 font-mono p-1 sm:p-2 text-right select-none overflow-hidden"
        style={{ fontSize: `${fontSize}px` }}
      >
        {Array.from({ length: lineCount }).map((_, i) => (
          <div key={i} className="leading-tight">
            {i + 1}
          </div>
        ))}
      </div>
      
      {/* Editor controls */}
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-gray-700 bg-opacity-50 rounded flex">
        <button 
          onClick={() => handleZoom(false)} 
          className="p-1 text-white hover:bg-gray-600"
          title="Decrease font size"
          aria-label="Decrease font size"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
        </button>
        <button 
          onClick={() => handleZoom(true)} 
          className="p-1 text-white hover:bg-gray-600"
          title="Increase font size"
          aria-label="Increase font size"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      
      {/* Actual editor */}
      <textarea
        ref={editorRef}
        value={code}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        className="absolute inset-0 resize-none pl-10 sm:pl-12 pt-2 pr-2 pb-2 font-mono text-transparent bg-transparent caret-gray-900 dark:caret-gray-100 outline-none z-10"
        style={{ fontFamily: 'Fira Code, monospace', fontSize: `${fontSize}px` }}
        spellCheck="false"
        autoCapitalize="off"
        autoComplete="off"
        autoCorrect="off"
        readOnly={readOnly}
        aria-label="Code editor"
      />
      
      {/* Syntax highlighted preview */}
      <pre
        ref={previewRef}
        className="absolute inset-0 pl-10 sm:pl-12 pt-2 pr-2 pb-2 overflow-hidden font-mono pointer-events-none z-0 whitespace-pre"
        style={{ fontFamily: 'Fira Code, monospace', fontSize: `${fontSize}px` }}
      ></pre>
    </div>
  );
};

export default CodeEditor; 