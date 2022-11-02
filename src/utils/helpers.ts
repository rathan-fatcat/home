export function isBrowser(): boolean {
  return typeof window !== 'undefined';
}

export function encodeQueryData(data = null) {
  if (data) {
    const ret = [];
    for (const d in data)
      ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
    return '?' + ret.join('&');
  }
  return '';
}

export function tryParseJSON(json: string): Record<string, unknown> | null {
  if (!json) {
    return null;
  }
  try {
    return JSON.parse(json);
  } catch (e) {
    throw new Error(`Failed to parse unexpected JSON response: ${json}`);
  }
}

const getDataType = (e: any) => typeof e;

export const getValidatedData = (
  data: any,
  type: string = 'string',
  onlyValidate: boolean = false
) => {
  const dataTypes: any = {
    string: '',
    array: [],
    bigint: 0,
    number: 0,
    null: null,
    undefined: undefined,
    boolean: false,
    object: {},
    function: () => {},
  };
  if (onlyValidate) {
    if (type.toLowerCase() === 'array' && Array.isArray(data)) {
      return true;
    } else if (
      type.toLowerCase() === 'object' &&
      data === null &&
      Array.isArray(data)
    ) {
      return false;
    }
    return getDataType(data) === type.toLowerCase();
  } else {
    if (getDataType(data) === type.toLowerCase()) {
      if (
        type.toLowerCase() === 'object' &&
        data === null &&
        Array.isArray(data)
      ) {
        return {};
      }
      return data;
    } else {
      if (type.toLowerCase() === 'array' && Array.isArray(data)) {
        return data;
      } else if (type.toLowerCase() === 'object' && data === null) {
        return {};
      } else {
        try {
          return dataTypes[type];
        } catch (e) {
          return false;
        }
      }
    }
  }
};
