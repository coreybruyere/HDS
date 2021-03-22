import theme from '../../theme';

/**
 * Raw indicator styles for focusable elements
 */
export const indicatorStyle = () => {
  return `
        position: relative;
        z-index: ${theme.zIndices.default};
        box-shadow:
        0 0 0 ${theme.radii.base} ${theme.colors.base[1]},
        0 0 0 calc(${theme.radii.base} * 2) ${theme.colors.focus};
        outline: none;
    `;
};

/**
 * :focus ring styles for focusable elements
 */
export const focusIndicatorStyle = () => {
  return `
        &:focus {
            ${indicatorStyle()}
        }

        &::-moz-focus-inner {
            border: 0;
        }
    `;
};

/**
 * Hide content visually, but keep it in the DOM for assistive technology
 */
export const visuallyHiddenStyle = () => {
  return `
        border: 0;
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
    `;
};

/**
 * Reset all button styles
 */
export const bareButtonStyle = () => {
  return `
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        cursor: pointer;
        outline: inherit;
        text-align: inherit;
    `;
};

/**
 * Standard card styles
 */
export const cardStyle = () => {
  return `
        box-sizing: border-box;
        overflow: hidden;
        background-color: ${theme.colors.primaryBackground};
        box-shadow: ${theme.shadows.lg};
        border-radius: ${theme.radii.lg};
    `;
};
