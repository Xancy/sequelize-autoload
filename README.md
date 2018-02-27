# sequelize-autoload
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

| Field Name        | Type   | Optional | Description                                                           |
|-------------------|:------:|:--------:|-----------------------------------------------------------------------|
| `server.dialect`  | String | &#10060; | Sequelize ORM dialect, see [here][doc-sequelize-example-usage].       |
| `server.host`     | String | &#10060; | Database host.                                                        |
| `server.database` | String | &#10060; | Database name.                                                        |
| `server.username` | String | &#10060; | Database connection username.                                         |
| `server.password` | String | &#10060; | Database connection password.                                         |
| `server.define`   | Object | &#10004; | Sequelize global define, see [here][doc-sequelize-options].           |
| `models.root`     | String | &#10004; | Path where generated scripts [(by `sequelize-auto`)](#usage) located. |

**Notes:**
1. If `models.root` is a relative path, it describes the path related to the config JSON file.

## License
MIT

[psr-0]: https://www.php-fig.org/psr/psr-0/ "PSR 0: Autoloading Standard"
[psr-4]: https://www.php-fig.org/psr/psr-4/ "PSR 4: Autoloader"
[github-sequelize]: https://github.com/sequelize/sequelize "GitHub - sequelize"
[npm-sequelize-auto]: https://www.npmjs.com/package/sequelize-auto "npm - sequelize-auto"
[doc-sequelize-example-usage]: http://docs.sequelizejs.com/#example-usage "Example Usage - Sequelize"
[doc-sequelize-options]: http://docs.sequelizejs.com/manual/installation/usage.html#options "Options - Sequelize"
