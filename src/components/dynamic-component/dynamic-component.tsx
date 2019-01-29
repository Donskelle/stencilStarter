import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'dynamic-component',
  shadow: false
})
export class DynamicComponent {
  @Prop() tag: string = 'div';
  @Prop() props: object = {
    class: 'test',
    classdwqe: 'test',
    id: '15',
  };

  render() {
    const CustomTag = `${this.tag}`;

    return <CustomTag {...this.props}>Hello, World! I'm using VDOM with dynamic created Tag {this.tag}</CustomTag>;
  }
}