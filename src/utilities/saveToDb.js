const getStoredData = (key) => {
  const storedData = localStorage.getItem(key);
  if (storedData) {
    return JSON.parse(storedData);
  }
  return [];
};

const saveToLocalStorage = (id, key) => {
  const storedData = getStoredData(key);
  const exists = storedData.includes(id);
  if (!exists) {
    storedData.push(id);
    localStorage.setItem(key, JSON.stringify(storedData));
    return;
  }
};

export { saveToLocalStorage, getStoredData };
