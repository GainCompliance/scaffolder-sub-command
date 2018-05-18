import {scaffold as scaffoldJavaScript} from '@travi/javascript-scaffolder';

export function javascript(options) {
  return scaffoldJavaScript({
    ...options,
    configs: {
      eslint: {prefix: '@gaincompliance/gain', packageName: '@gaincompliance/eslint-config-gain'},
      commitlint: {name: 'gain', packageName: 'commitlint-config-gain'}
    },
    overrides: {
      npmAccount: 'gaincompliance',
      author: {name: 'Gain Compliance', url: 'https://github.com/GainCompliance'}
    }
  });
}
