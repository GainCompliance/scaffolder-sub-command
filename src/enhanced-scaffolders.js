import {scaffold as scaffoldJavaScript} from '@travi/javascript-scaffolder';
import {prompt} from '@travi/github-scaffolder';
import {scaffold as scaffoldTravis} from '@travi/travis-scaffolder-javascript';
import {scaffold as scaffoldAppEngine} from '@travi/node-app-engine-standard-scaffolder';
import {scaffold as scaffoldHapi} from '@form8ion/hapi-scaffolder';

export function javascript(options) {
  return scaffoldJavaScript({
    ...options,
    configs: {
      eslint: {scope: '@gaincompliance'},
      commitlint: {name: 'gain', packageName: 'commitlint-config-gain'},
      babelPreset: {name: '@gaincompliance', packageName: '@gaincompliance/babel-preset'},
      remark: '@gaincompliance/remark-preset-lint'
    },
    overrides: {
      npmAccount: 'gaincompliance',
      author: {name: 'Gain Compliance', url: 'https://github.com/GainCompliance'}
    },
    ciServices: {Travis: {scaffolder: scaffoldTravis, public: true, private: true}},
    hosts: {
      'App Engine Standard': {projectTypes: ['node'], scaffolder: scaffoldAppEngine}
    },
    applicationTypes: {
      Hapi: {scaffolder: scaffoldHapi}
    }
  });
}

export function githubPrompt() {
  return prompt({account: 'GainCompliance'});
}
