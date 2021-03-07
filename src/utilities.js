const utilities = {
  getRealName(name) {
    if (name === 'Jimmy McGill') {
      name = 'Saul Goodman';
    }

    const splitName = name.split(' ');
    if (splitName[0] === 'Gus') {
      splitName[0] = 'Gustavo';
    } else if (splitName[0] === 'Kim') {
      splitName[0] = 'Kimberly';
    } else if (splitName[0] === 'Hank') {
      splitName[0] = 'Henry'
    } else if (splitName[0] === 'Chuck') {
      splitName[0] = 'Charles'
    } 

    const newName = splitName.join(' ');
    return newName;
  }
}

export default utilities;