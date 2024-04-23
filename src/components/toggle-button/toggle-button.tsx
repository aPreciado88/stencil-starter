import { Component, Host, h, Prop } from '@stencil/core';

const checkedBackground: string = '#0c359e';
const unCheckedBackground: string = '#49494b';

@Component({
  tag: 'toggle-button',
  styleUrl: 'toggle-button.css',
  shadow: true,
})
export class ToggleButton {

  checkbox: HTMLInputElement;
  background: HTMLSpanElement;

  @Prop({ mutable: true }) checked: boolean = false;

  componentDidLoad() {
    this.background.style.setProperty('background', this.checked ? checkedBackground : unCheckedBackground);
  }

  private toggle(): void {
    this.checked = !this.checked;
    this.background.style.setProperty('background', this.checked ? checkedBackground : unCheckedBackground);
  }

  render() {
    return (
      <Host onClick={this.toggle.bind(this)}>
        <div class="toggle">
          <input type="checkbox" ref={el => this.checkbox = el as HTMLInputElement} checked={this.checked} />
          <span class="slider" ref={el => this.background = el as HTMLSpanElement}></span>
        </div>
      </Host>
    );
  }
}
