const Sequelize = require('sequelize');
const Pick      = require('object.pick');
const Path      = require('path');

let _config      = {};
let _config_path = '.';
let _sequelize   = {};
let _models      = new Proxy({}, {
    get: (target, prop, receiver) => (prop in target ? true : autoload(prop)) && target[prop]
});

const read = function(path) {
    if(Path.normalize(path) !== Path.resolve(path)) {
        const callerFileName = (module.parent || {}).filename || __filename;
        const callerPath     = Path.dirname(callerFileName);

        path = Path.resolve(callerPath, path);
    }

    return path;
};

const load = function(config = '') {
    config = read(config);

    _config      = require(config);
    _config_path = config;
    _sequelize   = new Sequelize(
        _config.server.database,
        _config.server.username,
        _config.server.password,
        Pick(_config.server, ['host', 'dialect', 'define'])
    );
    _models      = new Proxy({}, {
        get: (target, prop, receiver) => (prop in target ? true : autoload(prop)) && target[prop]
    });

    _prototype.sequelize = _sequelize;
    _prototype.config    = _config;
    _prototype.models    = _models;
};

const autoload = function(models = []) {
    if(typeof models === 'string' && models !== '') {
        if(models in _config.models.tables) {
            let filename = _config.models.tables[models];
            let path     = Path.resolve(_config_path, _config.models.root, `${filename}.js`);

            _models[models] = _sequelize.import(read(path));
        }
    } else if(typeof models === 'object' && Array.isArray(models) && models.length > 0) {
        for(let model of models)
            autoload(model);
    } else {
        return false;
    }

    return true;
};

let _prototype       = {};
_prototype.sequelize = _sequelize;
_prototype.config    = _config;
_prototype.models    = _models;
_prototype.load      = load;
_prototype.Op        = Sequelize.Op;

module.exports = _prototype;
