import marked from 'marked';

onmessage = e => {
  const markdownString = e.data;
  const HTML = marked(markdownString);

  self.postMessage(HTML);
};
