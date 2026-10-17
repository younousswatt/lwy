import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import xml from 'highlight.js/lib/languages/xml';
import css from 'highlight.js/lib/languages/css';
import bash from 'highlight.js/lib/languages/bash';
import json from 'highlight.js/lib/languages/json';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('js', javascript);
hljs.registerLanguage('html', xml);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('css', css);
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('json', json);

export default function CodeBlock({ language = 'text', children }) {
  const [copyState, setCopyState] = useState('idle');
  const code = String(children).replace(/\n$/, '');
  const registeredLanguage = hljs.getLanguage(language) ? language : null;
  const highlighted = registeredLanguage
    ? hljs.highlight(code, { language: registeredLanguage }).value
    : hljs.highlightAuto(code).value;

  async function copyCode() {
    try {
      await navigator.clipboard.writeText(code);
      setCopyState('copied');
      window.setTimeout(() => setCopyState('idle'), 1500);
    } catch {
      setCopyState('failed');
      window.setTimeout(() => setCopyState('idle'), 2500);
    }
  }

  return (
    <div className="code-block">
      <div className="code-toolbar">
        <span>{language}</span>
        <button className="copy-button" type="button" onClick={copyCode}>
          {copyState === 'copied' ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
          <span>{copyState === 'copied' ? 'Copié' : copyState === 'failed' ? 'Copie impossible' : 'Copier'}</span>
        </button>
      </div>
      <pre><code className={`hljs language-${language}`} dangerouslySetInnerHTML={{ __html: highlighted }} /></pre>
      <span className="sr-only" aria-live="polite">
        {copyState === 'copied' ? 'Code copié dans le presse-papiers.' : copyState === 'failed' ? 'La copie a échoué.' : ''}
      </span>
    </div>
  );
}
