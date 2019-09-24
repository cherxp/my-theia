/********************************************************************************
 * Copyright (C) 2018 Ericsson and others.
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

import { injectable } from 'inversify';
import { PreferenceService, PreferenceChange } from '../';
import { Emitter, Event } from '../../../common';
import { OverridePreferenceName } from '../preference-contribution';
import URI from '../../../common/uri';
import { PreferenceChanges } from '../preference-service';

@injectable()
export class MockPreferenceService implements PreferenceService {
    constructor() { }
    dispose(): void { }
    get<T>(preferenceName: string): T | undefined;
    get<T>(preferenceName: string, defaultValue: T): T;
    get<T>(preferenceName: string, defaultValue: T, resourceUri: string): T;
    get<T>(preferenceName: string, defaultValue?: T, resourceUri?: string): T | undefined {
        return undefined;
    }
    resolve<T>(preferenceName: string, defaultValue?: T, resourceUri?: string): {
        configUri?: URI,
        value?: T
    } {
        return {};
    }
    inspect<T>(preferenceName: string, resourceUri?: string): {
        preferenceName: string,
        defaultValue: T | undefined,
        globalValue: T | undefined, // User Preference
        workspaceValue: T | undefined, // Workspace Preference
        workspaceFolderValue: T | undefined // Folder Preference
    } | undefined {
        return undefined;
    }
    // tslint:disable-next-line:no-any
    set(preferenceName: string, value: any): Promise<void> { return Promise.resolve(); }
    ready: Promise<void> = Promise.resolve();
    readonly onPreferenceChanged: Event<PreferenceChange> = new Emitter<PreferenceChange>().event;
    readonly onPreferencesChanged: Event<PreferenceChanges> = new Emitter<PreferenceChanges>().event;
    overridePreferenceName(options: OverridePreferenceName): string {
        return options.preferenceName;
    }
    overriddenPreferenceName(preferenceName: string): OverridePreferenceName | undefined {
        return undefined;
    }

    // tslint:disable-next-line:no-any
    validate(name: string, value: any): boolean { return true; }
}
