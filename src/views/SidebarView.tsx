import { Button } from "antd";
import { vscode } from "../utils/vscode";
import commands from "../constants/commands";

type Props = {};

export default function SidebarView({ }: Props) {
  const handleClick = () => {
    vscode.postMessage({
      command: commands.START_APP,
    });
  };
  const handleClickNew = () => {
    vscode.postMessage({
      command: commands.NEW_REQUEST,
    });
  };
  const handleClickImport = () => {
    vscode.postMessage({
      command: commands.IMPORT_REQUEST,
    });
  };

  return (
    <div>
      <p className="mb-4">To start sending HTTP requests, press the `Start APP` button below.</p>
      <Button type='primary' className="mb-4" block onClick={handleClick}>
        Start APP
      </Button>

      <div className="flex gap-4">
        <Button type='primary' className="grow" block onClick={handleClickNew}>
          New
        </Button>
        <Button type='primary' className="grow" block onClick={handleClickImport}>
          Import
        </Button>
      </div>

      <div className="mt-2 border-b">
        History
      </div>
    </div>
  );
}
