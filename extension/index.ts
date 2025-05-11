import type { ExtensionContext } from 'vscode';
import * as vscode from 'vscode';
import { MainPanel } from './views/panel';
import SidebarWebViewPanel from './views/sidebar';

export function activate(context: ExtensionContext) {
  // Add command to the extension context
  context.subscriptions.push(
    vscode.commands.registerCommand('vscode-plugin-pmlike.showPMLike', async () => {
      MainPanel.render(context);
    }),
  );

  const SidebarWebViewProvider = new SidebarWebViewPanel(context);

  context.subscriptions.push(
    vscode.window.registerWebviewViewProvider(
      'vscode-plugin-pmlike.collectionMenu',
      SidebarWebViewProvider,
      { webviewOptions: { retainContextWhenHidden: true } },
    ),
  );


}

export function deactivate() { }