/**
 * Retrieves an item from secure local storage with type safety.
 *
 * @template T - The expected type of the stored value (defaults to any)
 * @param {string} key - The key to retrieve the value from local storage
 * @returns {T | null} The stored value cast to type T, or null if no value exists
 *
 * @example
 * ```typescript
 * // Get a string value
 * const name = getItemFromLocalStorage<string>('userName');
 *
 * // Get a custom type
 * const user = getItemFromLocalStorage<User>('currentUser');
 * ```
 */

import secureLocalStorage from 'react-secure-storage';

export async function setItemToLocalStorage(
  key: string,
  value: any,
): Promise<void> {
  await secureLocalStorage.setItem(key, value);
}

export async function getItemFromLocalStorage<T = any>(
  key: string,
): Promise<T | null> {
  const value = await secureLocalStorage.getItem(key);
  return value !== null ? (value as T) : null;
}

export async function removeItemFromLocalStorage(key: string): Promise<void> {
  await secureLocalStorage.removeItem(key);
}

export async function hasItemInLocalStorage(key: string): Promise<boolean> {
  const value = await secureLocalStorage.getItem(key);
  return value !== null;
}

export async function clearItemsFromLocalStorage(): Promise<void> {
  await secureLocalStorage.clear();
}
