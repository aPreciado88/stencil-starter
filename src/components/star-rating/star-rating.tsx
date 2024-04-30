import { Component, Host, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'star-rating',
  styleUrl: 'star-rating.css',
  shadow: true,
})
export class StarRating {

  // --------------------------------------------------------------------------
  //
  //  Public Properties
  //
  // --------------------------------------------------------------------------

  @Prop() maxStars: number = 5;
  @Prop({ mutable: true }) currentRating: number = 2;
  @Prop() color: string = 'orange';


  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @State() starList: Array<object> = [];


  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------

  componentWillLoad(): void {
    this.createStarList(this.currentRating);
  }


  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private setRating = (newRating: number): void => {
    this.currentRating = newRating;
    this.createStarList(this.currentRating);
  }

  private createStarList = (currentRating: number): void => {
    let starList = [];
 
    for (let i = 1; i <= this.maxStars; i++) {
      if (i <= currentRating) {
        starList.push(<span class="rating" style={{color: this.color}} onMouseOver={() => this.createStarList(i)} onMouseOut={() => this.createStarList(this.currentRating)} onClick={() => this.setRating(i)}>&#x2605;</span>); // filled star
      } else {
        starList.push(<span class="rating" style={{color: this.color}} onMouseOver={() => this.createStarList(i)} onMouseOut={() => this.createStarList(this.currentRating)} onClick={() => this.setRating(i)}>&#x2606;</span>); // empty star
      }
    }
 
    this.starList =  starList;
  }

  render() {
    return (
      <Host>
        <div>
          {this.starList}
        </div>
      </Host>
    );
  }

}
