import * as javascriptScaffolder from '@travi/javascript-scaffolder';
import {scaffold as scaffoldTravis} from '@travi/travis-scaffolder-javascript';
import any from '@travi/any';
import {assert} from 'chai';
import sinon from 'sinon';
import {javascript} from '../../src/enhanced-scaffolders';

suite('scaffolder factories', () => {
  let sandbox;

  setup(() => {
    sandbox = sinon.createSandbox();

    sandbox.stub(javascriptScaffolder, 'scaffold');
  });

  teardown(() => sandbox.restore());

  test('that the custom properties are passed along with the provided options', () => {
    const options = any.simpleObject();
    const output = any.simpleObject();

    javascriptScaffolder.scaffold
      .withArgs({
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
      })
      .resolves(output);

    return assert.becomes(javascript(options), output);
  });
});
