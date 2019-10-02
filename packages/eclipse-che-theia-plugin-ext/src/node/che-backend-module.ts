/*********************************************************************
 * Copyright (c) 2018 Red Hat, Inc.
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 **********************************************************************/

import { ContainerModule } from 'inversify';
import { ChePluginApiProvider } from './che-plugin-api-provider';
import { ExtPluginApiProvider } from '@theia/plugin-ext';
// import { ChePluginApiContribution } from './che-plugin-script-service';
// import { BackendApplicationContribution } from '@theia/core/lib/node/backend-application';
// import {
//     ChePluginService
// } from '../common/che-protocol';
// import { ChePluginServiceImpl } from './che-plugin-service';

export default new ContainerModule(bind => {
    bind(ChePluginApiProvider).toSelf().inSingletonScope();
    bind(Symbol.for(ExtPluginApiProvider)).toService(ChePluginApiProvider);

    // bind(ChePluginApiContribution).toSelf().inSingletonScope();
    // bind(BackendApplicationContribution).toService(ChePluginApiContribution);

    // bind(ChePluginServiceImpl).toSelf().inSingletonScope();
    // bind(ChePluginService).toDynamicValue(ctx => new ChePluginServiceImpl(ctx.container)).inSingletonScope();
    // bind(ConnectionHandler).toDynamicValue(ctx =>
    //     new JsonRpcConnectionHandler(CHE_PLUGIN_SERVICE_PATH, () =>
    //         ctx.container.get(ChePluginService)
    //     )
    // ).inSingletonScope();

});
