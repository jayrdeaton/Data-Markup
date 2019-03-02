const cosmetic = require('cosmetic');

module.exports = (data, opts) => {
  const tab = '  ';
  let pad = '';
  let result = '';
  const translations = opts && opts.translations ? opts.translations : {};

  const styles = opts && opts.styles ? opts.styles : {};
  if (!styles.date) styles.date = (i) => cosmetic.magenta(i);
  if (!styles.null) styles.null = (i) => cosmetic.bold(i);
  if (!styles.number) styles.number = (i) => cosmetic.yellow(i);
  if (!styles.boolean) styles.boolean = (i) => cosmetic.yellow(i);
  if (!styles.string) styles.string = (i) => cosmetic.green(i);

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
        result +=`${pad}]`;
      };
    } else if (data instanceof Date) {
      result += styles.date(data);
    } else if (data === null) {
      result += styles.null('null');
    } else if (typeof data === 'object') {
      result += result.endsWith(': ') ? '{' : `${pad}{`;
      if (Object.keys(data).length === 0) {
        result += '}';
      } else {
        result += '\n';
        for (const [index, key] of Object.keys(data).entries()) {
          result += `${pad}${tab}${key}: `;
          if (translations[key]) data[key] = translations[key](data[key]);
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
        result += `${pad}}`;
      };
    } else if (typeof data === 'number') {
      result += styles.number(`${pad}${data.toString()}`);
    } else if (typeof data === 'boolean') {
      result += styles.boolean(data.toString());
    } else if (typeof data === 'string') {
      result += styles.string(`${pad}'${data}'`);
    };
  };
  prettyPrintVariable(data, pad);
  return result;
};
