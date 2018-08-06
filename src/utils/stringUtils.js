const stringUtils = {};
stringUtils.capitalize = string => (
  string.charAt(0).toUpperCase() + string.slice(1)
);

export default stringUtils;
