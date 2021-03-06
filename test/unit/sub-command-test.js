import sinon from 'sinon';
import {assert} from 'chai';
import any from '@travi/any';
import * as projectScaffolder from '@travi/project-scaffolder';
import * as githubScaffolder from '@travi/github-scaffolder';
import {scaffold as scaffoldPython} from '@gaincompliance/python-scaffolder';
import * as scaffolder from '../../src/sub-command';
import {githubPrompt, javascript} from '../../src/enhanced-scaffolders';

suite('scaffold-project sub-command', () => {
  let sandbox, command, description, action;
  const prompt = () => undefined;

  setup(() => {
    sandbox = sinon.createSandbox();

    command = sinon.stub();
    description = sinon.stub();
    action = sinon.stub();

    sandbox.stub(projectScaffolder, 'scaffold');
    sandbox.stub(githubScaffolder, 'prompt');
    sandbox.stub(console, 'error');

    command.withArgs('scaffold').returns({description});
    description.withArgs('scaffold a new project').returns({action});
  });

  teardown(() => {
    process.exitCode = 0;
    sandbox.restore();
  });

  test('that language scaffolders are provided to the project scaffolder', () => {
    projectScaffolder.scaffold.resolves();
    githubScaffolder.prompt.withArgs({account: 'GainCompliance'}).returns(prompt);

    scaffolder.addSubCommand({command});

    return action.getCall(0).args[0]().then(() => assert.calledWith(
      projectScaffolder.scaffold,
      {
        languages: {JavaScript: javascript, Python: scaffoldPython},
        vcsHosts: {GitHub: {scaffolder: githubScaffolder.scaffold, prompt: githubPrompt, public: true, private: true}},
        overrides: {copyrightHolder: 'Gain Compliance'}
      }
    ));
  });

  test('that the exit-code is set to `1` upon failure when a code is not provided', () => {
    const error = new Error();
    projectScaffolder.scaffold.rejects(error);

    scaffolder.addSubCommand({command});

    return action.getCall(0).args[0]().then(() => {
      assert.equal(process.exitCode, 1);
      assert.calledWith(console.error, error);      // eslint-disable-line no-console
    });
  });

  test('that the exit-code is set to the provided code upon failure when provided', () => {
    const code = any.integer();
    const error = new Error();
    error.data = {code};
    projectScaffolder.scaffold.rejects(error);

    scaffolder.addSubCommand({command});

    return action.getCall(0).args[0]().then(() => assert.equal(process.exitCode, code));
  });
});
