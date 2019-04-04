import { Component, Prop, EventEmitter, Event } from "@stencil/core";
import { PossibleProps } from "./interfaceProp";

@Component({
  tag: "dynamic-component",
  shadow: false
})
export class DynamicComponent {
  @Prop() tag: string = "div";
  @Prop() props: PossibleProps;
  @Event() updateComp: EventEmitter;

  componentDidUpdate() {
    this.updateComp.emit();
  }

  render() {
    const CustomTag = `${this.tag}`;
    const { arr, ...rest } = this.props;

    return (
      <CustomTag {...rest}>
        {arr && arr.map((name, i) => <li key={i}>{name}</li>)}
        <slot />
      </CustomTag>
    );
  }
}
