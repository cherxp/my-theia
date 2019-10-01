/*********************************************************************
 * Copyright (c) 2019 Red Hat, Inc.
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 **********************************************************************/

import { RPCProtocol } from '@theia/plugin-ext/lib/common/rpc-protocol';
import { CheDevfile } from '../common/che-protocol';

export class CheDevfileImpl implements CheDevfile {

    constructor(rpc: RPCProtocol) {
    }

    async createWorkspace(devfilePath: string): Promise<void> {
        console.log("createWorkspace in CheDevfileImpl");
        return Promise.resolve();
    }

}
