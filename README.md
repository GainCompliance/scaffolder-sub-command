# scaffolder-sub-command

scaffolder [sub-command](https://github.com/tj/commander.js#command-specific-options)
for [commander](https://github.com/tj/commander.js)

<!--status-badges start -->

[![Build Status][ci-badge]][ci-link]
[![Codecov](https://img.shields.io/codecov/c/github/GainCompliance/scaffolder-sub-command.svg)](https://codecov.io/github/gaincompliance/scaffolder-sub-command)

<!--status-badges end -->

## Usage

<!--consumer-badges start -->

[![npm][npm-badge]][npm-link]
[![MIT license][license-badge]][license-link]

<!--consumer-badges end -->

### Installation

```sh
$ npm install @gaincompliance/scaffolder-sub-command -S
```

### Adding this sub-command to a [commander](https://github.com/tj/commander.js) program

```js
import program from 'commander';
import {addSubCommand} from '@gaincompliance/scaffolder-sub-command';

addSubCommand(program);
```

### Execution

```sh
$ mkdir <name of project> # it is recommended to name the directory to match the repo name
$ cd <name of project>
$ <name of containing commander instance> scaffold # gain scaffold
```

## Contribution

<!--contribution-badges start -->

[![Conventional Commits][commit-convention-badge]][commit-convention-link]
[![Commitizen friendly][commitizen-badge]][commitizen-link]
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![PRs Welcome][PRs-badge]][PRs-link]
[![Dependabot][dependabot-badge]][dependabot-link]

<!--contribution-badges end -->

### Dependencies

```sh
$ nvm install
$ npm install
```

### Verification

```sh
$ npm test
```

## Related Projects

* [javascript-scaffolder](https://npm.im/@travi/javascript-scaffolder)
* [github-scaffolder](https://npm.im/@travi/github-scaffolder)
* [travis-scaffolder-javascript](https://npm.im/@travi/travis-scaffolder-javascript)
* [project-scaffolder](https://npm.im/@travi/project-scaffolder)
* [cli](https://npm.im/@travi/cli)

[npm-link]: https://www.npmjs.com/package/@gaincompliance/scaffolder-sub-command

[npm-badge]: https://img.shields.io/npm/v/@gaincompliance/scaffolder-sub-command.svg

[license-link]: LICENSE

[license-badge]: https://img.shields.io/github/license/GainCompliance/scaffolder-sub-command.svg

[ci-link]: https://travis-ci.com/GainCompliance/scaffolder-sub-command

[ci-badge]: https://img.shields.io/travis/com/GainCompliance/scaffolder-sub-command/master.svg

[commit-convention-link]: https://conventionalcommits.org

[commit-convention-badge]: https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg

[commitizen-link]: http://commitizen.github.io/cz-cli/

[commitizen-badge]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg

[PRs-link]: http://makeapullrequest.com

[PRs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg

[dependabot-link]: https://dependabot.com/

[dependabot-badge]: https://badgen.net/dependabot/GainCompliance/scaffolder-sub-command/?icon=dependabot
