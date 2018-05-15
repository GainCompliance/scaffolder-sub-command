import {scaffold as scaffoldJavaScript} from '@travi/javascript-scaffolder';

export function javascript(options) {
  return scaffoldJavaScript({
    ...options,
    configs: {eslint: {prefix: '@gaincompliance/gain', packageName: '@gaincompliance/eslint-config-gain'}},
    npmAccount: 'gaincompliance'
  });
}
