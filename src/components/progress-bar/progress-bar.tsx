import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'progress-bar',
  styleUrl: 'progress-bar.css',
  shadow: true,
})
export class ProgressBar {

  render() {
    return (
      <Host>
        <div class="progress-wrapper">
          <div class="progress-bar">
          </div>                       
        </div>
      </Host> 
    );
  }
}
