import {scaffold as scaffoldJavaScript} from '@travi/javascript-scaffolder';
import {scaffold as scaffoldTravis} from '@travi/travis-scaffolder-javascript';

export function javascript(options) {
  return scaffoldJavaScript({
    ...options,
    configs: {
      eslint: {prefix: '@gaincompliance/gain', packageName: '@gaincompliance/eslint-config-gain'},
      commitlint: {name: 'gain', packageName: 'commitlint-config-gain'},
      babelPreset: {name: 'gain', packageName: 'babel-preset-gain'}
    },
    overrides: {
      npmAccount: 'gaincompliance',
      author: {name: 'Gain Compliance', url: 'https://github.com/GainCompliance'}
    },
    ciServices: {Travis: {scaffolder: scaffoldTravis, public: true, private: true}}
  });
}
