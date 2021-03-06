import * as javascriptScaffolder from '@travi/javascript-scaffolder';
import * as githubScaffolder from '@travi/github-scaffolder';
import {scaffold as scaffoldTravis} from '@travi/travis-scaffolder-javascript';
import {scaffold as scaffoldAppEngine} from '@travi/node-app-engine-standard-scaffolder';
import {scaffold as scaffoldHapi} from '@form8ion/hapi-scaffolder';
import {scaffold as scaffoldJest} from '@form8ion/jest-scaffolder';
import {scaffold as scaffoldMocha} from '@form8ion/mocha-scaffolder';
import {scaffold as scaffoldReactComponents} from '@form8ion/react-components-scaffolder';
import any from '@travi/any';
import {assert} from 'chai';
import sinon from 'sinon';
import {javascript, githubPrompt} from '../../src/enhanced-scaffolders';

suite('scaffolder factories', () => {
  let sandbox;
  const output = any.simpleObject();

  setup(() => {
    sandbox = sinon.createSandbox();

    sandbox.stub(javascriptScaffolder, 'scaffold');
    sandbox.stub(githubScaffolder, 'prompt');
  });

  teardown(() => sandbox.restore());

  test('that the custom properties are passed along with the provided options', async () => {
    const options = any.simpleObject();
    javascriptScaffolder.scaffold
      .withArgs({
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
        unitTestFrameworks: {mocha: {scaffolder: scaffoldMocha}, jest: {scaffolder: scaffoldJest}},
        ciServices: {Travis: {scaffolder: scaffoldTravis, public: true, private: true}},
        hosts: {
          'App Engine Standard': {projectTypes: ['node'], scaffolder: scaffoldAppEngine}
        },
        applicationTypes: {
          Hapi: {scaffolder: scaffoldHapi}
        },
        packageTypes: {
          'React Component Library': {scaffolder: scaffoldReactComponents}
        }
      })
      .resolves(output);

    assert.equal(await javascript(options), output);
  });

  test('that the owner account is passed to the github prompts', async () => {
    githubScaffolder.prompt.withArgs({account: 'GainCompliance'}).resolves(output);

    assert.equal(await githubPrompt(), output);
  });
});
