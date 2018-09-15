import {scaffold as scaffoldProject} from '@travi/project-scaffolder';
import {scaffold as scaffoldGithub} from '@travi/github-scaffolder';
import {githubPrompt, javascript} from './enhanced-scaffolders';

export function addSubCommand(program) {
  program
    .command('scaffold')
    .description('scaffold a new project')
    .action(() => scaffoldProject({
      languages: {JavaScript: javascript},
      vcsHosts: {GitHub: {scaffolder: scaffoldGithub, prompt: githubPrompt, public: true, private: true}},
      overrides: {copyrightHolder: 'Gain Compliance'}
    })
      .catch(err => {
        console.error(err);     // eslint-disable-line no-console
        process.exitCode = (err.data && err.data.code) || 1;
      }));
}
