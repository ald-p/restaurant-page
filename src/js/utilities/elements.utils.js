export const setMultipleAttributes = ({...otherAttributes}, element) => {
  if (Object.keys(otherAttributes) === 0) {
    return;
  } else {
    const attributeKeys = Object.keys(otherAttributes);
    for (const key of attributeKeys) {
      element.setAttribute(key, otherAttributes[key]);
    };
  }

  return element;
}

export const createDataList = (data, id) => {
  const dataList = document.createElement('datalist');
  dataList.id = id;
  data.forEach( dataVal => {
    const option = document.createElement('option');
    option.setAttribute('value', dataVal);
    dataList.appendChild(option);
  });

  return dataList;
}