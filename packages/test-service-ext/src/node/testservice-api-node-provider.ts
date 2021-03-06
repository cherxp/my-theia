/********************************************************************************
 * Copyright (C) 2018 Red Hat, Inc. and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/

// import { Emitter } from '@theia/core/lib/common/event';
// import { RPCProtocol, RPCProtocolImpl } from '@theia/plugin-ext/src/common/rpc-protocol';
import { RPCProtocol } from '@theia/plugin-ext/src/common/rpc-protocol';
import { Plugin, emptyPlugin } from '@theia/plugin-ext/lib/common/plugin-api-rpc';
import { ExtPluginApiBackendInitializationFn } from '@theia/plugin-ext';
import * as testService from '@theia/testservice';
import { PluginManager } from '@theia/plugin-ext';
// import { MessageRegistryExt } from '@theia/plugin-ext/src/plugin/message-registry';
import { createAPIFactory, TestServiceApiFactory } from '../testserver-api';

const pluginsApiImpl = new Map<string, typeof testService>();
let defaultApi: typeof testService;
let isLoadOverride = false;
let TestServiceApiFactory: TestServiceApiFactory;
let plugins: PluginManager;

// tslint:disable-next-line:no-any
// const ctx = self as any;

// const emitter = new Emitter();
// const rpc = new RPCProtocolImpl({
//     onMessage: emitter.event,
//     send: (m: {}) => {
//         ctx.postMessage(m);
//     }
// });
// const messageRegistryExt = new MessageRegistryExt(rpc);

export const provideApi: ExtPluginApiBackendInitializationFn = (rpc: RPCProtocol, pluginManager: PluginManager) => {
    TestServiceApiFactory = createAPIFactory(rpc); // , messageRegistryExt);
    plugins = pluginManager;

    if (!isLoadOverride) {
        overrideInternalLoad();
        isLoadOverride = true;
    }

};

function overrideInternalLoad(): void {
    const module = require('module');
    // save original load method
    const internalLoad = module._load;

    // if we try to resolve theia module, return the filename entry to use cache.
    // tslint:disable-next-line:no-any
    module._load = function (request: string, parent: any, isMain: {}): any {

        console.log('node/testservice-api-node-provider.ts : request =' + request);

        if (request !== '@theia/testservice') {
            return internalLoad.apply(this, arguments);
        }

        const plugin = findPlugin(parent.filename);
        if (plugin) {

            console.log('plugin found parent.filename =' + parent.filename);
            console.log('plugin found plugin.model.id =' + plugin.model.id);

            let apiImpl = pluginsApiImpl.get(plugin.model.id);
            if (!apiImpl) {
                apiImpl = TestServiceApiFactory(plugin);
                pluginsApiImpl.set(plugin.model.id, apiImpl);
            }

            console.log('apiImpl type =' + typeof (apiImpl));

            return apiImpl;
        }

        if (!defaultApi) {
            console.log(`Could not identify plugin for '@bar/foo' require call from ${parent.filename}`);
            console.warn(`Could not identify plugin for '@bar/foo' require call from ${parent.filename}`);
            defaultApi = TestServiceApiFactory(emptyPlugin);
        }

        return defaultApi;
    };
}

function findPlugin(filePath: string): Plugin | undefined {
    return plugins.getAllPlugins().find(plugin => filePath.startsWith(plugin.pluginFolder));
}
