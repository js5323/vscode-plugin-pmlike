import * as vscode from "vscode";
import type { ExtensionContext } from "vscode";
import commands from "../../src/constants/commands";

class SidebarWebViewPanel {
  private sidebarWebview: vscode.WebviewView | null = null;
  // private extensionUri;
  public mainWebViewPanel: vscode.WebviewPanel | null = null;
  public extContext: ExtensionContext;

  constructor(context: ExtensionContext) {
    // this.extensionUri = extensionUri;
    this.extContext = context;
  }

  resolveWebviewView(webviewView: vscode.WebviewView): void | Thenable<void> {
    this.sidebarWebview = webviewView;

    this.sidebarWebview.webview.options = {
      enableScripts: true
    };

    this.sidebarWebview.webview.html = __getWebviewHtml__({
      serverUrl: `${import.meta.env.VITE_DEV_SERVER_URL}sidebar.html`,
      webview: this.sidebarWebview.webview,
      context: this.extContext,
    });

    this.receiveSidebarWebViewMessage()
  }

  private receiveSidebarWebViewMessage() {
    if (!this.sidebarWebview) return;

    this.sidebarWebview.webview.onDidReceiveMessage(
      (message: any) => {
        const command = message.command;
        console.log(`SidebarWebViewPanel: command: ${command}`);

        switch (command) {
          case commands.START_APP:
            vscode.commands.executeCommand(commands.MAIN_WEB_VIEW_PANEL);
            return;
        }
      }
    );
  }

}

export default SidebarWebViewPanel;
