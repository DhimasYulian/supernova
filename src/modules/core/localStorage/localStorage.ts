const getLocalStorageValue = (key: string) => {
  const value = localStorage.getItem(key) ?? '';
  return JSON.parse(value);
};

const setLocalStorageValue = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const removeLocalStorageValue = (key: string) => {
  localStorage.removeItem(key);
};

const clearLocalStorage = () => {
  localStorage.clear();
};

export {
  clearLocalStorage,
  getLocalStorageValue,
  removeLocalStorageValue,
  setLocalStorageValue,
};
