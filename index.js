const cosmetic = require('cosmetic');

module.exports = (data) => {
  const tab = '  ';
  let pad = '';
  let result = '';
  const prettyPrintVariable = (data, pad) => {
    // Array, Object, Date, Number, Bool, String
    if (Array.isArray(data)) {
      result += result.endsWith(': ') ? '[' : `${pad}[`;
      if (data.length === 0) {
        result += ']';
      } else {
        result += '\n';
        for (const [index, item] of data.entries()) {
          prettyPrintVariable(item, `${pad}${tab}`);
          if (index === data.length - 1) {
            result += '\n';
          } else {
            result += ',\n';
          };
        };
      };
      result +=`${pad}]`;
    } else if (data instanceof Date) {
      result += cosmetic.magenta(`${data.toLocaleDateString()} @ ${data.toLocaleTimeString()}`);
    } else if (data === null) {
      result += cosmetic.bold('null');
    } else if (typeof data === 'object') {
      result += result.endsWith(': ') ? '{' : `${pad}{`;
      if (Object.keys(data).length === 0) {
        result += '}';
      } else {
        result += '\n';
        for (const [index, key] of Object.keys(data).entries()) {
          result += `${pad}${tab}${key}: `;
          if (typeof data[key] === 'object') {
            prettyPrintVariable(data[key], `${pad}${tab}`);
          } else {
            prettyPrintVariable(data[key], '');
          }
          if (index === Object.keys(data).length - 1) {
            result += '\n';
          } else {
            result += ',\n';
          };
        };
      };
      result += `${pad}}`;
    } else if (typeof data === 'number') {
      result += cosmetic.yellow(`${pad}${data.toString()}`);
    } else if (typeof data === 'boolean') {
      result += cosmetic.yellow(data.toString());
    } else if (typeof data === 'string') {
      result += cosmetic.green(`${pad}'${data}'`);
    };
  };
  prettyPrintVariable(data, pad);
  return result;
};
