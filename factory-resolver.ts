import { Component, ComponentFactoryResolver } from '@angular/core';

@Component({
  ...
})
export class MyComponent {
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  createComponentFactory() {
    return this.componentFactoryResolver.resolveComponentFactory(MyDynamicComponent);
  }
}
