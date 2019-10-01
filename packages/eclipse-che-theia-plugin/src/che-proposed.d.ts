/*********************************************************************
 * Copyright (c) 2018 Red Hat, Inc.
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 **********************************************************************/

/**
 * This is the place for API experiments and proposals.
 * These API are NOT stable and subject to change. Use it on own risk.
 */


declare module '@eclipse-che/plugin' {

    export namespace myServer {

        export function sayHello(): Promise<void>;

    }

    export namespace devfile {
        export function createWorkspace(devfilePath: string): Promise<void>;
    }

}
