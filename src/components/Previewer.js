import marked from 'marked';

const Previewer = ({ inputMarkdown }) => {

  const renderer = new marked.Renderer();
  renderer.link = function(href, title, text) {
    return `<a target="_blank" href=${href}>${text}</a>`;
  };

  marked.setOptions({
    breaks: true
  });

  return (
    <div
      id="preview"
      className="prevStyles"
      dangerouslySetInnerHTML={{ __html: marked(inputMarkdown, { renderer }) }}>
    </div>
  );
};

export default Previewer
