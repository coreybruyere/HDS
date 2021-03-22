import { createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';
import { rem } from 'polished';

import { getUnitlessLineHeight } from '../utilities';
import defaultTheme from '../../../theme';

export const BASE_FONT_SIZE = defaultTheme.fontSizes.med;
export const BASE_LINE_HEIGHT = getUnitlessLineHeight(BASE_FONT_SIZE, rem('22px'));
export const BASE_HEADING = `
    font-weight: 500;
`;
export const H1 = `
    margin-bottom: ${defaultTheme.space.lg};
    font-size: ${defaultTheme.fontSizes.xxl};
    line-height: ${getUnitlessLineHeight(defaultTheme.fontSizes.xxl, rem('36px'))};
`;
export const H2 = `
    margin-bottom: ${defaultTheme.space.med};
    font-size: ${defaultTheme.fontSizes.xl};
    line-height: ${getUnitlessLineHeight(defaultTheme.fontSizes.xl, rem('26px'))};
`;
export const H3 = `
    margin-bottom: ${defaultTheme.space.med};
    font-size: ${defaultTheme.fontSizes.lg};
    line-height: ${getUnitlessLineHeight(defaultTheme.fontSizes.lg, rem('22px'))};
`;
export const H4 = `
    font-size: ${defaultTheme.fontSizes.sm};
    line-height: ${getUnitlessLineHeight(defaultTheme.fontSizes.sm, rem('22px'))};
`;

const GlobalStyle = createGlobalStyle`
    ${styledNormalize}

    @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-display: fallback;
        src:
            local("Inter Regular"),
            local("Inter-Regular"),
            url('https://assets.hart.com/haiku/fonts/Inter-Regular.woff2') format('woff2'),
            url('https://assets.hart.com/haiku/fonts/Inter-Regular.woff') format('woff');
    }

    @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-display: fallback;
        src:
            local("Inter Medium"),
            local("Inter-Medium"),
            url('https://assets.hart.com/haiku/fonts/Inter-Medium.woff2') format('woff2'),
            url('https://assets.hart.com/haiku/fonts/Inter-Medium.woff') format('woff');
    }

    @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-display: fallback;
        src:
            local("Inter SemiBold"),
            local("Inter-SemiBold"),
            url('https://assets.hart.com/haiku/fonts/Inter-SemiBold.woff2') format('woff2'),
            url('https://assets.hart.com/haiku/fonts/Inter-SemiBold.woff') format('woff');
    }

    @font-face {
        font-family: 'Inter';
        font-style: italic;
        font-weight: 400;
        font-display: fallback;
        src:
            local("Inter Italic"),
            local("Inter-Italic"),
            url('https://assets.hart.com/haiku/fonts/Inter-Italic.woff2') format('woff2'),
            url('https://assets.hart.com/haiku/fonts/Inter-Italic.woff') format('woff');
    }

    @font-face {
        font-family: 'Inter';
        font-style: italic;
        font-weight: 500;
        font-display: fallback;
        src:
            local("Inter Medium Italic"),
            local("Inter-MediumItalic"),
            url('https://assets.hart.com/haiku/fonts/Inter-MediumItalic.woff2') format('woff2'),
            url('https://assets.hart.com/haiku/fonts/Inter-MediumItalic.woff2') format('woff');
    }

    :root {
        --reach-dialog: 1;
        font-family: ${({ theme }) => theme.fonts.familySans};
        font-size: 16px; /* Default browser font size */
        font-feature-settings:
            'calt' on, /* contextual alternates */
            'tnum' on, /* tabular figures */
            'case' on, /* case-sensitive forms */
            'ss02' on, /* stylistic sets */
            'zero' on; /* slashed zero */
        line-height: ${BASE_LINE_HEIGHT};
        color: ${({ theme }) => theme.colors.primaryText};
    }

    body {
        font-size: ${BASE_FONT_SIZE};
    }

	* {
		&,
		&:before,
		&:after {
			box-sizing: inherit;
        }

        &:disabled,
        [aria-disabled="true"] {
            cursor: not-allowed;
        }
    }

    h1, h2, h3, h4, h5, h6 {
		${BASE_HEADING}
	}

	h1 {
		${H1}
	}

	h2 {
		${H2}
	}

	h3 {
		${H3}
	}

	h4 {
		${H4}
	}
`;

export default GlobalStyle;
