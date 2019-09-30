
/**
 * Generated using theia-plugin-generator
 */

import * as mytheia from '@theia/plugin';
import * as myapi from '@theia/testservice';

export function start(context: mytheia.PluginContext) {
    const informationMessageTestCommand = {
        id: 'hello-world-example-generated',
        label: "Hello World"
    };
    context.subscriptions.push(mytheia.commands.registerCommand(informationMessageTestCommand, (...args: any[]) => {
        // mytheia.window.showInformationMessage('Hello World from new plugin!');
        myapi.myServerNew.sayHello();
    }));

}

export function stop() {

}
