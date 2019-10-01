/*********************************************************************
 * Copyright (c) 2018 Red Hat, Inc.
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 **********************************************************************/

import * as che from '@eclipse-che/plugin';
import { RPCProtocol } from '@theia/plugin-ext/lib/common/rpc-protocol';
import { Plugin } from '@theia/plugin-ext/lib/common/plugin-api-rpc';
import { PLUGIN_RPC_CONTEXT } from '../common/che-protocol';
import { CheDevfileImpl } from './che-devfile';

export interface CheApiFactory {
    (plugin: Plugin): typeof che;
}

export function createAPIFactory(rpc: RPCProtocol): CheApiFactory {
    let cheDevfileImpl = rpc.set(PLUGIN_RPC_CONTEXT.CHE_DEVFILE, new CheDevfileImpl(rpc));

    return function (plugin: Plugin): typeof che {

        const devfile: typeof che.devfile = {
            createWorkspace(devfilePath: string): Promise<void> {
                return cheDevfileImpl.createWorkspace(devfilePath);
            }
        };

        const myServer: typeof che.myServer = {

            sayHello(): Promise<void> {
                console.log("myServer.sayHello called !");
                return Promise.resolve();
            }
        };

        return <typeof che>{
            devfile,
            myServer
        };
    };

}
