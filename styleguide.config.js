const path = require('path');
const fs = require('fs');
const wpc = require('./config/webpack-prod-config.js');

module.exports = {
  getExampleFilename(componentPath) {
    if (componentPath.indexOf('src') > -1) {
      return componentPath.replace(/src/, 'examples').replace(/\.jsx?$/, '.md');
    }
    return componentPath;
  },

  sections: [
    {
      name: 'Documentation',
      content: 'examples/Documentation.md',
      sectionDepth: 1,

      sections: [
        {
          name: 'Installation',
          content: 'examples/installation.md',
        },
        {
          name: 'Configuration',
          content: 'examples/configuration.md',
        },
      ],
    },
    {
      name: 'Components',
      // content: 'examples/Components.md',
      usageMode: 'expand', // 'hide' | 'collapse' | 'expand'
      components: ['src/SwitchButton.jsx'],
      skipComponentsWithoutExample: true,
      // sectionDepth: 1,
    },
    // {
    //   name: 'Examples',
    //   // components: 'dist/ui/*.js',
    //   exampleMode: 'hide', // 'hide' | 'collapse' | 'expand'
    //   usageMode: 'expand', // 'hide' | 'collapse' | 'expand'
    //   sectionDepth: 1,
    //   content: 'examples/Examples.md',

    //   sections: [
    //     {
    //       name: 'Color mixing',
    //       content: 'examples/Examples_colorMixing.md',
    //     },
    //     {
    //       name: 'Half stars',
    //       content: 'examples/Examples_halfStars.md',
    //     },
    //   ],
    // },
  ],
  webpackConfig: wpc,
  components: 'src/**/*.{js,jsx}',
  styleguideDir: 'styleguidistHtml',
  pagePerSection: true,
  moduleAliases: {
    'react-switch-input': path.resolve(__dirname, 'index.js'),
  },
  require: [path.join(__dirname, 'examples/Examples_overrides.css')],
  updateExample(props, exampleFilePath) {
    const { settings, lang } = props;
    if (typeof settings.file === 'string') {
      const filepath = path.resolve(exampleFilePath, settings.file);
      delete settings.file;
      return {
        content: fs.readFileSync(filepath, 'utf8'),
        settings,
        lang,
      };
    }
    return props;
  },
};
