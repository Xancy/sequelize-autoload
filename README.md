[![][badge-version-npm]][npm-sequelize-auto] [![][badge-version-node]][npm-sequelize-auto] [![][badge-version-semantic-release]][github-semantic-release-node-version-requirement] [![][badge-version-sequelize]][npm-sequelize] [![][badge-github-release]][github-sequelize-auto-release] [![][badge-downloads-npm-month]][npm-sequelize-auto] [![][badge-license]][npm-sequelize-auto] [![][badge-commitizen-friendly]][github-commitizen] [![][badge-semantic-release]][github-semantic-release] [![][badge-irc]][irc]

An autoloader for [Sequelize][github-sequelize], inspired by [PSR-0][psr-0] and [PSR-4][psr-4].

## Installation
```bash
npm install --save sequelize-autoload
```

## Usage
```javascript
const db = require('sequelize-autoload');
db.load('/path/to/config');
```

To generate sequelize models files:
> See [sequelize-auto][npm-sequelize-auto] package.

To make a config file:
> See [Config File](#config-file) section.

To get a Sequelize table instance:
```javascript
db.models.model_name
```

**Notes:**

1. `db.load()` reads config, but does not load table(s) immediately.
2. Tables are loaded when they are called.
3. **Only** uninitialized table(s) will be loaded, otherwise existing table instance(s) will be returned.
4. `db.load()` can be called more than once, which will reload the config and clear all existing table instance(s).

## Config File
Generally, the config file is a JSON separate from your main JS script. It contains database, tables and Sequelize-specific configurations. It looks like:
```json
{
    "server": {
        "dialect": "mysql",
        "host": "localhost",
        "database": "test",
        "username": "username",
        "password": "password",
        "define": {}
    },
    "models": {
        "root": "../models"
    }
}
```

| Field Name        | Type   | Optional         | Description                                                           |
|-------------------|:------:|:----------------:|-----------------------------------------------------------------------|
| `server.dialect`  | String | ![no][icon-no]   | Sequelize ORM dialect, see [here][doc-sequelize-example-usage].       |
| `server.host`     | String | ![no][icon-no]   | Database host.                                                        |
| `server.database` | String | ![no][icon-no]   | Database name.                                                        |
| `server.username` | String | ![no][icon-no]   | Database connection username.                                         |
| `server.password` | String | ![no][icon-no]   | Database connection password.                                         |
| `server.define`   | Object | ![yes][icon-yes] | Sequelize global define, see [here][doc-sequelize-options].           |
| `models.root`     | String | ![yes][icon-yes] | Path where [generated scripts](#usage) (by `sequelize-auto`) located. |

**Notes:**
1. If `models.root` is a relative path, it describes the path related to the config JSON file.

## License
MIT

[badge-version-npm]: https://img.shields.io/npm/v/sequelize-autoload.svg "Sequelize Autoload"
[badge-version-semantic-release]: https://img.shields.io/badge/semantic--release@node-%3E%3D8.3.0-yellow.svg "Semantic Release requirement"
[badge-version-node]: https://img.shields.io/node/v/sequelize-autoload.svg "Sequelize Autoload"
[badge-version-sequelize]: https://img.shields.io/badge/Sequelize-%3E%3D4.0.0-orange.svg "Sequelize"
[badge-downloads-npm-month]: https://img.shields.io/npm/dm/sequelize-autoload.svg "Sequelize Autoload downloads"
[badge-github-release]: https://img.shields.io/github/release/boxsnake-nodejs/sequelize-autoload.svg "Sequelize Autoload latest release"
[badge-license]: https://img.shields.io/npm/l/sequelize-autoload.svg "License"
[badge-commitizen-friendly]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg "Commitizen friendly"
[badge-semantic-release]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg "semantic-release"
[badge-irc]: https://img.shields.io/badge/irc-%23sequelize--autoload-orange.svg "irc"

[icon-yes]: https://raw.githubusercontent.com/boxsnake-nodejs/sequelize-autoload/master/images/icon-yes.png
[icon-no]: https://raw.githubusercontent.com/boxsnake-nodejs/sequelize-autoload/master/images/icon-no.png

[psr-0]: https://www.php-fig.org/psr/psr-0/ "PSR 0: Autoloading Standard"
[psr-4]: https://www.php-fig.org/psr/psr-4/ "PSR 4: Autoloader"
[github-sequelize]: https://github.com/sequelize/sequelize "Sequelize"
[github-sequelize-auto-release]: https://github.com/boxsnake-nodejs/sequelize-autoload/releases/latest "Sequelize-auto Release"
[github-commitizen]: http://commitizen.github.io/cz-cli/ "Commitizen friendly"
[github-semantic-release]: https://github.com/semantic-release/semantic-release "Semantic Release"
[github-semantic-release-node-version-requirement]: https://github.com/semantic-release/semantic-release/blob/caribou/docs/support/node-version.md#node-version-requirement "Semantic Release - Node version requirement"
[npm-sequelize]: https://www.npmjs.com/package/sequelize "Sequelize"
[npm-sequelize-auto]: https://www.npmjs.com/package/sequelize-auto "Sequelize-auto"
[doc-sequelize-example-usage]: http://docs.sequelizejs.com/#example-usage "Sequelize - Example Usage"
[doc-sequelize-options]: http://docs.sequelizejs.com/manual/installation/usage.html#options "Sequelize - Options"
[irc]: http://webchat.freenode.net/?channels=sequelize-autoload "irc - #sequelize-autoload"
