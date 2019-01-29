import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'my-component',
  shadow: false
})
export class MyComponent {
  @Prop() tag: string;
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