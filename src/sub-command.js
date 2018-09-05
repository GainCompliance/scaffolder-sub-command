import {scaffold as scaffoldProject} from '@travi/project-scaffolder';
import {scaffold as scaffoldGithub, prompt} from '@travi/github-scaffolder';
import {javascript} from './enhanced-scaffolders';

export function addSubCommand(program) {
  program
    .command('scaffold')
    .description('scaffold a new project')
    .action(() => scaffoldProject({
      languages: {JavaScript: javascript},
      vcsHosts: {GitHub: {scaffolder: scaffoldGithub, prompt, public: true, private: true}},
      overrides: {githubAccount: 'GainCompliance', copyrightHolder: 'Gain Compliance'}
    }).catch(err => {
      console.error(err);     // eslint-disable-line no-console
      process.exitCode = (err.data && err.data.code) || 1;
    }));
}
