
/**
 * Generated using theia-plugin-generator
 */

import * as mytheia from '@theia/plugin';
import * as myapi from '@theia/testservice';

export function start(context: mytheia.PluginContext) {

    console.log("Plugin-Start Begin");

    const informationMessageTestCommand = {
        id: 'hello-world-example-generated',
        label: "Hello World"
    };

    const commands = mytheia.commands.getCommands();
    console.log("typeof commands = " + typeof (commands));

    context.subscriptions.push(mytheia.commands.registerCommand(informationMessageTestCommand, (...args: any[]) => {
        // mytheia.window.showInformationMessage('Hello World from new plugin!');
        myapi.myServerNew.sayHello();
    }));

    console.log("Plugin-Start End");
}

export function stop() {

}
