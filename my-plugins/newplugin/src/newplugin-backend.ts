
/**
 * Generated using theia-plugin-generator
 */

import * as mytheia from '@theia/plugin';
import * as mycheapi from '@eclipse-che/plugin';
// import * as myapi from '@theia/testservice';

export function start(context: mytheia.PluginContext) {
    const informationMessageTestCommand = {
        id: 'hello-world-example-generated',
        label: "Hello World"
    };
    context.subscriptions.push(mytheia.commands.registerCommand(informationMessageTestCommand, (...args: any[]) => {
        // mytheia.window.showInformationMessage('Hello World from new plugin!');
        // myapi.myServerNew.sayHello();
        // mytheia.myServer.sayHello();

        mycheapi.devfile.createWorkspace('test message');

    }));

}

export function stop() {

}
