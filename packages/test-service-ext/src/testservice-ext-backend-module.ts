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

import { ContainerModule } from 'inversify';
import { TestServerPluginApiProvider } from './testservice-plugin-api-provider';
import { ExtPluginApiProvider } from '@theia/plugin-ext';
// import { TestServicePluginApiContribution } from './node/testservice-script-service';
// import { BackendApplicationContribution } from '@theia/core/lib/node/backend-application';

export default new ContainerModule(bind => {

    bind(TestServerPluginApiProvider).toSelf().inSingletonScope();
    bind(Symbol.for(ExtPluginApiProvider)).toService(TestServerPluginApiProvider);

    // bind(TestServicePluginApiContribution).toSelf().inSingletonScope();
    // bind(BackendApplicationContribution).toService(TestServicePluginApiContribution);
});
