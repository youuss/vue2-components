// hoist <script> and <style> tags out of the returned html
// so that they can be placed outside as SFC blocks.
export const hoistPlugin = (md) => {
  const RE = /^<(script|style)(?=(\s|>|$))/i;

  md.renderer.rules.html_block = (tokens, idx) => {
    const { content } = tokens[idx];
    const data = md.__data;
    const hoistedTags = data.hoistedTags || (data.hoistedTags = []);
    if (RE.test(content.trim())) {
      hoistedTags.push(content);
      return '';
    }
    return content;
  };
};
