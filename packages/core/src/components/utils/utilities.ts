import { stripUnit } from 'polished';

/**
 * Output unitless line-height
 * Expects rem string value for fontSize and lineHeight
 * Usage:
 */
export const getUnitlessLineHeight = (fontSize: string, lineHeight: string) => {
  return stripUnit(lineHeight) / stripUnit(fontSize);
};
