global.Prism = { disableWorkerMessageHandler: true };
import marked from 'marked';
const Prism = require('prismjs');

onmessage = e => {
  const renderer = new marked.Renderer();

  renderer.link = (href, title, text) => {
    return `<span class="fancyLink"><a href="${href}" target="_blank" rel="noreferrer">${text}</a></span>`;
  };

  const markdownString = e.data;
  const HTML = marked(markdownString, {
    renderer: renderer,
    highlight: (code, lang) => {
      return Prism.highlight(code, Prism.languages[lang], lang);
    },
  });

  self.postMessage(HTML);
};
