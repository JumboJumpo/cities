import { ComponentFactory, ComponentFactoryResolver, ComponentRef, Directive, ElementRef, Input, OnChanges, OnInit, Renderer2, ViewContainerRef } from "@angular/core";
import { LoaderComponent } from "../shared/components/loader/loader.component";

@Directive({
    selector: "[appLoader]"
})
export class LoaderDirective implements OnInit, OnChanges {

    @Input() appLoader: boolean;
    componentRef: ComponentRef<any>;
    constructor(
        private renderer: Renderer2,
        private element: ElementRef,
        private viewContainerRef: ViewContainerRef,
        private componentFactoryResolver: ComponentFactoryResolver
    ) {}
      
    ngOnInit() {
        if(this.appLoader){
            const loaderFactory = this.componentFactoryResolver.resolveComponentFactory(LoaderComponent);
            this.componentRef = this.viewContainerRef.createComponent(loaderFactory);
            this.renderer.appendChild(this.element.nativeElement, this.componentRef.location.nativeElement);
        } else{
            
        }
    }

    ngOnChanges() {
        if(!this.appLoader){
            this.renderer.removeChild(this.element.nativeElement, this.componentRef.location.nativeElement);
            this.componentRef.destroy();
        }
    }


}