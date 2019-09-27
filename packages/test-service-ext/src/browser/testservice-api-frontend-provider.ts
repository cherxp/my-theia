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

// import { Plugin, emptyPlugin } from '@theia/plugin-ext/lib/common/plugin-api-rpc';
// import { ExtPluginApiFrontendInitializationFn } from '@theia/plugin-ext/lib/common/plugin-ext-api-contribution';
// import { RPCProtocol, RPCProtocolImpl } from '@theia/plugin-ext/lib/common/rpc-protocol';
// import * as testService from '@theia/testservice';
// import { MessageRegistryExt } from '@theia/plugin-ext/src/plugin/message-registry';
// import { Emitter } from '@theia/core';
// import { createAPIFactory } from './testserver-api';

// // tslint:disable-next-line:no-any
// const ctx = self as any;
// const pluginsApiImpl = new Map<string, typeof testService>();
// let defaultApi: typeof testService;

// const emitter = new Emitter();
// const rpc = new RPCProtocolImpl({
//     onMessage: emitter.event,
//     send: (m: {}) => {
//         ctx.postMessage(m);
//     }
// });

// const messageRegistryExt = new MessageRegistryExt(rpc);

// export const initializeApi: ExtPluginApiFrontendInitializationFn = (rpc1: RPCProtocol, plugins: Map<string, Plugin>) => {
//     const TestServiceApiFactory = createAPIFactory(
//         rpc1,
//         messageRegistryExt);
//     const handler = {
//         // tslint:disable-next-line:no-any
//         get: (target: any, name: string) => {
//             const plugin = plugins.get(name);
//             if (plugin) {
//                 let apiImpl = pluginsApiImpl.get(plugin.model.id);
//                 if (!apiImpl) {
//                     apiImpl = TestServiceApiFactory(plugin);
//                     pluginsApiImpl.set(plugin.model.id, apiImpl);
//                 }
//                 return apiImpl;
//             }

//             if (!defaultApi) {
//                 defaultApi = TestServiceApiFactory(emptyPlugin);
//             }

//             return defaultApi;
//         }
//     };

//     // tslint:disable-next-line:no-null-keyword
//     ctx['testService'] = new Proxy(Object.create(null), handler);
// };
