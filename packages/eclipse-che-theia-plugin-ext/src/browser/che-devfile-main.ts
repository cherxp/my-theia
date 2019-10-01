/*********************************************************************
 * Copyright (c) 2019 Red Hat, Inc.
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 **********************************************************************/

import { interfaces } from 'inversify';
import { CheDevfileMain } from '../common/che-protocol';
import { AbstractDialog } from '@theia/core/lib/browser';
import { WindowService } from '@theia/core/lib/browser/window/window-service';
// import { MessageService } from '@theia/core';

export class CheDevfileMainImpl implements CheDevfileMain {

    private readonly windowService: WindowService;

    // private readonly messageService: MessageService;

    private readonly openFactoryLinkDialog: OpenFactoryLinkDialog;

    constructor(container: interfaces.Container) {
        this.windowService = container.get(WindowService);
        // this.messageService = container.get(MessageService);

        this.openFactoryLinkDialog = new OpenFactoryLinkDialog(this.windowService);
    }

    async $createWorkspace(devfilePath: string): Promise<void> {
        return new Promise<void>(async (resolve, reject) => {
            console.log("$createWorkspace called");
            resolve();
        });
    }

    /**
     * Opens window with URL to the factory.
     */
    protected async openFactoryWindow(uri: string): Promise<void> {
        try {
            this.windowService.openNewWindow(uri);
        } catch (err) {
            // browser blocked opening of a new tab
            this.openFactoryLinkDialog.showDialog(uri);
        }
    }

}

class OpenFactoryLinkDialog extends AbstractDialog<string> {

    protected readonly link: HTMLAnchorElement;
    protected readonly openButton: HTMLButtonElement;

    value: string;

    constructor(private readonly windowService: WindowService) {
        super({
            title: 'Your browser prevented opening of a new tab'
        });

        const message = document.createElement('div');
        message.innerHTML = 'URI to create a workspace:<br>';
        this.contentNode.appendChild(message);

        this.link = document.createElement('a');
        this.link.target = '_blank';
        this.link.setAttribute('style', 'color: var(--theia-ui-dialog-font-color);');
        message.appendChild(this.link);

        this.appendCloseButton();
        this.openButton = this.appendAcceptButton('Open');
    }

    showDialog(uri: string): void {
        this.value = uri;

        this.link.innerHTML = uri;
        this.link.href = uri;
        this.openButton.onclick = () => {
            this.windowService.openNewWindow(uri);
        };

        this.open();
    }

}