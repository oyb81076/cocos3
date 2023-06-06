# @cocos3/mobx4 包

将 mobx 打成 esm 包使用

```ts
import { action, observable, observer, render } from '@cocos3/mobx4';
import { _decorator, Component, Input, Label } from 'cc';
const { ccclass, property } = _decorator;

@observer
@ccclass('NewComponent')
export class NewComponent extends Component {
  @property(Label)
  private label: Label = null!;
  @observable
  private index = 0;
  protected onLoad(): void {
    this.node.on(Input.EventType.MOUSE_DOWN, this.onClick, this);
  }

  @action
  protected onClick() {
    this.index += 1;
  }

  @render
  protected render() {
    this.label.string = '点击次数: ' + this.index;
  }
}
```
