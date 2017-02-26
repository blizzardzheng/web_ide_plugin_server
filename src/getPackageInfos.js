import config, { debugConfig } from './config';
import 'isomorphic-fetch';
// require ('coding_web_ide_plugin/package.json')

const debugExtension = process.env.EXTENSION || '';

export default (id) => {
    if (debugConfig && !id) {
        return debugConfig;
    } else if (debugConfig) {
        return debugConfig[id]
    }
    const result = config.reduce((p, v) => {
    const packageConfig = require(`${v}/package.json`);
    p[v] = packageConfig.codingPackage
    return p
}, {})
    if (id) {
    return result[id]
}
    return result
}
