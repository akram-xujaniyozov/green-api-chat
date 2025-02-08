const setDataStorage = (key: string, value: string | boolean) => {
  window.localStorage.setItem(key, `${value}`);
};

const getDataStorage = (key: string): string => {
  return window.localStorage.getItem(key) ?? '"';
};

const clearStorage = () => {
  window.localStorage.clear();
};

export { setDataStorage, getDataStorage, clearStorage };
