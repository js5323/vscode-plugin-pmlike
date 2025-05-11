import { Button } from "antd";
import { vscode } from "../utils/vscode";
import commands from "../constants/commands";

type Props = {};

export default function SidebarView({}: Props) {
  const handleClick = () => {
    vscode.postMessage({
      command: commands.START_APP,
    });
  };

  return (
    <div>
      <p>To start sending HTTP requests, press the `Start APP` button below.</p>
      <Button type='primary' block onClick={handleClick}>
        Start APP
      </Button>
    </div>
  );
}
