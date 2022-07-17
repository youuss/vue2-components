import { createMarkdownRenderer } from './markdown/markdown';

function createMarkdown(options) {
  const { markdown = {} } = options;
  const md = createMarkdownRenderer(markdown);
  if (options.markdown && options.markdown.init) options.markdown.init({ md });

  return (source, file) => {
    const { transforms = {} } = options;
    let result = source;

    if (transforms.before) source = transforms.before({ source, file, md });

    if (transforms.render) {
      result = transforms.render({ source, file, md });
    } else {
      result = md.render(source);
    }

    if (transforms.after) {
      result = transforms.after({
        result, source, file, md,
      });
    }

    return result;
  };
}

function markdownPlugin(userOptions = {}) {
  const mdRender = createMarkdown(userOptions);

  return {
    name: 'vite-plugin-doc',
    enforce: 'pre',

    transform(raw, id) {
      if (!id.endsWith('.md')) return null;
      return mdRender(raw, id);
    },
  };
}

export default function vitePluginDoc(options) {
  const { plugins = [] } = options;

  return [...plugins, markdownPlugin(options)];
}
