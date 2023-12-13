import { each, isObject, isString } from "underscore";

interface AnyObject {
  [key: string]: any;
}

export function searchKey(
  obj: AnyObject,
  searchStr: string,
  replaceValue?: any,
): AnyObject[] {
  const matches: AnyObject[] = [];

  function search(obj: AnyObject, parentKey?: string) {
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const currentKey: string = key.toString();
        const fullKey = parentKey ? `${parentKey}.${currentKey}` : currentKey;

        if (currentKey.startsWith("_")) continue; // Skip keys starting with underscore (private)

        if (currentKey.includes(searchStr)) {
          if (replaceValue !== undefined) {
            obj[key] = replaceValue;
          } else {
            matches.push({
              key: fullKey,
              value: obj[key],
            });
          }
        }

        if (typeof obj[key] === "object" && obj[key] !== null) {
          search(obj[key], fullKey); // Recursive call for nested objects
        }
      }
    }
  }

  search(obj);

  return matches;
}

export function updateValueByPath(
  obj: AnyObject,
  path: string,
  newValue: any,
): AnyObject {
  const pathSegments = path.split(".");
  let currentObj: AnyObject = obj;

  for (let i = 0; i < pathSegments.length - 1; i++) {
    const segment = pathSegments[i];
    currentObj = currentObj[segment];
    if (!currentObj || typeof currentObj !== "object") {
      // Handle invalid path or non-object intermediate values
      throw new Error(`Invalid path: ${path}`);
    }
  }

  const lastSegment = pathSegments[pathSegments.length - 1];
  currentObj[lastSegment] = newValue;

  return obj;
}

interface SearchResult {
  key: string;
  value: any;
}

export function searchObjectKeys(
  obj: any,
  searchKey: string,
  results: SearchResult[] = [],
): SearchResult[] {
  each(obj, (value: any, key: string) => {
    if (isObject(value)) {
      searchObjectKeys(value, searchKey, results);
    } else if (
      isString(key) &&
      !key.startsWith("_") &&
      key.includes(searchKey)
    ) {
      results.push({ key, value });
    }
  });

  return results;
}

interface MyObject {
  [key: string]: number | MyObject | number[];
}

export function replaceValueForKey(
  obj: MyObject,
  targetKey: string,
  replacementValue: any,
): void {
  each(obj, function (value, key) {
    if (isObject(value)) {
      // Recursively search nested objects
      replaceValueForKey(value as MyObject, targetKey, replacementValue);
    } else if (isString(key) && key === targetKey) {
      // If the key matches the target key, replace the value
      obj[key] = replacementValue;
    }
  });
}
