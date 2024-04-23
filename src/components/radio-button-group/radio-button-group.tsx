import { Component, Host, h, Prop, Element, State, Listen } from '@stencil/core';

@Component({
  tag: 'radio-button-group',
  styleUrl: 'radio-button-group.css',
  shadow: true,
})
export class RadioButtonGroup {

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //stores the selected radio button
  @Prop({ mutable: true }) selectedItem: HTMLRadioButtonElement = null;


  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @Element() el: HTMLRadioButtonGroupElement;
  @State() radioButtons: HTMLRadioButtonElement[] = [];


  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------

  componentWillLoad(): void {
    this.setRadioButtonId();
  }


  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private setRadioButtonId = (): void => {
    this.radioButtons = Array.from(this.el.querySelectorAll("radio-button"));
    this.radioButtons?.forEach((radioButton, index) => radioButton.id = index.toString());
  };

  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------

  @Listen("radioButtonClick")
  radioButtonClickHandler(event: CustomEvent): void {
    this.selectedItem = event.target as HTMLRadioButtonElement;
    this.radioButtons = Array.from(this.el.querySelectorAll("radio-button"));

    const unselectedRadioButtons = this.radioButtons.filter((radioButton) => radioButton.id !== this.selectedItem.id);

    unselectedRadioButtons.forEach(radioButton => {
      if(this.selectedItem.id !== radioButton.id) {
        radioButton.checked = false;
      }
    });
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
