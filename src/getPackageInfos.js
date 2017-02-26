import config, { debugConfig } from './config';
import 'isomorphic-fetch';


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
