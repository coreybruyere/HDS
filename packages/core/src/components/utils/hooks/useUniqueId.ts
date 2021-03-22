import { useMemo } from 'react';

let idCounter = 0;

export function useUniqueId(prefix: string) {
  const id = useMemo(() => idCounter++, [prefix]);
  return `${prefix}${id}`;
}
