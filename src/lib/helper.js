export const findPropFromObj = (object, key) => {
  if (object.hasOwnProperty(key)) {
    return object[key];
  }

  for (const k of Object.keys(object)) {
    if (typeof object[k] === "object") {
      const o = findPropFromObj(object[k], key);
      if (o !== null && typeof o !== 'undefined')
        return o;
    }
  }

  return null;
}
