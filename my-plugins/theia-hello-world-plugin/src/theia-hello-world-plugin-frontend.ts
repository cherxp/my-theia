
/**
 * Generated using theia-plugin-generator
 */

import * as theia from '@theia/plugin';
import * as myservice from '@theia/testservice';

export function start(context: theia.PluginContext) {
    const informationMessageTestCommand = {
        id: 'hello-world-example-generated',
        label: "Hello World"
    };
    context.subscriptions.push(theia.commands.registerCommand(informationMessageTestCommand, (...args: any[]) => {

        // theia.myServer.sayHello();
        myservice.myServerNew.sayHello();

    }));

}

export function stop() {

}

//         // Main area
//         addView(0, theia.WebviewPanelTargetArea.Main, 0, 'lightblue');
//         addView(1, theia.WebviewPanelTargetArea.Main, 1, 'yellow');
//         addView(2, theia.WebviewPanelTargetArea.Main, 2, 'lightgreen');
//         addView(3, theia.WebviewPanelTargetArea.Main, 4, 'orange');

//         // Left area
//         addView(4, theia.WebviewPanelTargetArea.Left, 0, 'red');
//         addView(5, theia.WebviewPanelTargetArea.Left, 1, 'magenta');

//         // Right views
//         addView(6, theia.WebviewPanelTargetArea.Right, 0, 'pink');
//         addView(7, theia.WebviewPanelTargetArea.Right, 1, 'blue');

//         // Bottom views
//         addView(8, theia.WebviewPanelTargetArea.Bottom, 0, 'darkblue');
//         addView(9, theia.WebviewPanelTargetArea.Bottom, 1, 'gold');

//         ShowCofigfile();

// function ShowCofigfile(): void {
//     //theia.file
// }

// function addView(viewNumber: number, targetArea: theia.WebviewPanelTargetArea, viewColumn: number, color: String) {

//     var showOptions = new xShowOptions();
//     showOptions.area = targetArea;
//     showOptions.preserveFocus = false;
//     showOptions.viewColumn = viewColumn;

//     var panel = theia.window.createWebviewPanel(
//         'viewType',
//         'View' + viewNumber,
//         showOptions);

//     panel.webview.html = '<!DOCTYPE html>\
//         <html>\
//         <body style="background-color:' + color + ';">\
//         \
//         <h1>View ' + viewNumber.toString() + '</h1>\
//         \
//         <p>My first paragraph.</p>\
//         \
//         </body>\
//         </html>';
// }

// class xShowOptions implements theia.WebviewPanelShowOptions {
//     /**
//          * Target area where webview panel will be resided. Shows in the 'WebviewPanelTargetArea.Main' area if undefined.
//          */
//     area: theia.WebviewPanelTargetArea | undefined;

//     /**
//      * Editor View column to show the panel in. Shows in the current `viewColumn` if undefined.
//      */
//     viewColumn: number | undefined;

//     /**
//      * When `true`, the webview will not take focus.
//      */
//     preserveFocus: boolean | undefined;
// }
