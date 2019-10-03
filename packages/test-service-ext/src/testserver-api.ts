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

import * as testservice from '@theia/testservice';
import { RPCProtocol } from '@theia/plugin-ext/src/common/rpc-protocol';
import { Plugin } from '@theia/plugin-ext/lib/common/plugin-api-rpc';
import { MessageRegistryExt } from '@theia/plugin-ext/src/plugin/message-registry';
// import { MainMessageType } from '@theia/plugin-ext/lib/common/plugin-api-rpc';

export interface TestServiceApiFactory {
    (plugin: Plugin): typeof testservice;
}

export function createAPIFactory(rpc: RPCProtocol)// , messageRegistryExt: MessageRegistryExt)
    : TestServiceApiFactory {

    const messageRegistryExt = new MessageRegistryExt(rpc);
    // const showInformationMessage = messageRegistryExt.showMessage.bind(messageRegistryExt, MainMessageType.Info);

    return function (plugin: Plugin): typeof testservice {

        const myServerNew: typeof testservice.myServerNew = {

            sayHello(): void {
                console.log('Hello from myServerNew !!!');
                // showInformationMessage('*** Hello from New Service !');
            }

        };

        return <typeof testservice>{
            myServerNew
        };

    };
}
