/*********************************************************************
 * Copyright (c) 2018 Red Hat, Inc.
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 **********************************************************************/

import { ProxyIdentifier, createProxyIdentifier } from '@theia/plugin-ext/lib/common/rpc-protocol';

export interface CheDevfile {
}

export interface CheDevfileMain {
    $createWorkspace(devfilePath: string): Promise<void>;
}

export const PLUGIN_RPC_CONTEXT = {

    CHE_DEVFILE: <ProxyIdentifier<CheDevfile>>createProxyIdentifier<CheDevfile>('CheDevfile'),
    CHE_DEVFILE_MAIN: <ProxyIdentifier<CheDevfileMain>>createProxyIdentifier<CheDevfileMain>('CheDevfileMain'),

};
