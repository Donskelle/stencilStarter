import { Component, Prop } from "@stencil/core";

@Component({
  tag: "dynamic-component",
  shadow: false
})
export class DynamicComponent {
  @Prop() tag: string = "div";
  @Prop() props: object = {};

  render() {
    const CustomTag = `${this.tag}`;

    return (
      <CustomTag {...this.props}>
        {this.props && this.props.arr && this.props.arr.map((name, i) => <li key={i}>{name}</li>)}
        <slot />
      </CustomTag>
    );
  }
}
