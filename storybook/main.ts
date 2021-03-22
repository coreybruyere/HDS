module.exports = {
  stories: ['../packages/**/stories/*.stories.@(ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-docs',
    '@storybook/addon-a11y/register',
    '@storybook/addon-viewport/register',
    '@storybook/addon-knobs/register'
  ],
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false
      },
      propFilter: (prop) => {
        if (prop.parent) {
          return !prop.parent.fileName.includes('react') && !prop.parent.fileName.includes('styled-components');
        }

        return true;
      }
    }
  }
};
