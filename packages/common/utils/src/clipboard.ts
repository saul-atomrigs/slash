/** @tossdocs-ignore */
import { isIE } from '.';

async function writeText(text: string): Promise<boolean> {
  if (isIE() || !clipboardSupported()) {
    return false;
  }

  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

function clipboardSupported() {
  return navigator.clipboard != null;
}

export const clipboard = {
  writeText,
};
