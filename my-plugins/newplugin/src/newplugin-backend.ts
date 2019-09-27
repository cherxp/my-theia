
/**
 * Generated using theia-plugin-generator
 */

import * as theia from '@theia/plugin';
import * as myapi from '@theia/testservice';

export function start(context: theia.PluginContext) {
    const informationMessageTestCommand = {
        id: 'hello-world-example-generated',
        label: "Hello World"
    };
    context.subscriptions.push(theia.commands.registerCommand(informationMessageTestCommand, (...args: any[]) => {
        // theia.window.showInformationMessage('Hello World from new plugin!');
        myapi.myServerNew.sayHello();
    }));

}

export function stop() {

}
