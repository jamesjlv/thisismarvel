const path = require("path");

function toTitleCase(word) {
  const firstLetter = word.charAt(0).toUpperCase();
  const rest = word.slice(1);
  return `${firstLetter}${rest}`;
}

const transformer = (src, filePath) => {
  if (path.extname(filePath) !== ".svg") {
    throw new Error(`File extension is not '.svg'. ${src}`);
  }

  const notACharacterPattern = /\W+/;

  const name = `svg-${path.basename(filePath, ".svg")}`
    .split(notACharacterPattern)
    .map(toTitleCase)
    .join("");

  return {
    code: `
const React = require('react');
function ${name}(props) {
return React.createElement(
  'svg',
  Object.assign({}, props, {'data-file-name': ${name}.name})
);
}
module.exports = ${name};
`,
  };
};

module.exports = {
  process: transformer,
};
