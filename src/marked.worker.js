import marked from 'marked';

onmessage = e => {
  const renderer = new marked.Renderer();

  renderer.link = (href, title, text) => {
    return `<span class="fancyLink"><a href="${href}" target="_blank" rel="noreferrer">${text}</a></span>`;
  };

  const markdownString = e.data;
  const HTML = marked(markdownString, { renderer: renderer });

  self.postMessage(HTML);
};
