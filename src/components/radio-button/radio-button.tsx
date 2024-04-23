import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'radio-button',
  styleUrl: 'radio-button.css',
  shadow: true,
})
export class RadioButton {

  radio: HTMLInputElement;

  @Prop({ mutable: true }) checked: boolean = false;
  @Prop() label: string = '';
  

  //--------------------------------------------------------------------------
  //
  //  Events
  //
  //--------------------------------------------------------------------------

  @Event() radioButtonClick: EventEmitter<void>;


  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------

  private check = (): void => {
    this.checked = true;
    this.radioButtonClick.emit();
  };

  render() {
    return (
      <Host onClick={this.check}>
        <input type="radio" class="pointer" ref={el => this.radio = el as HTMLInputElement} checked={this.checked} />
        <label class="label pointer">{this.label}</label>
      </Host>
    );
  }
}
