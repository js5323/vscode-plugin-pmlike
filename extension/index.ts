import type { ExtensionContext } from 'vscode';
import { commands } from 'vscode';
import { MainPanel } from './views/panel';

export function activate(context: ExtensionContext) {
  // Add command to the extension context
  context.subscriptions.push(
    commands.registerCommand('vscode-plugin-pmlike.showPMLike', async () => {
      MainPanel.render(context);
    }),
  );
}

export function deactivate() { }