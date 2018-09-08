import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
    selector:'[appDropdown]'
})
export class DropdownDirective{
    // @Input() appDropdown()
    @HostBinding('class.open') isOpen:boolean = false;

    @HostListener('click') openToggle(){
        // console.log('heard');
        this.isOpen = !this.isOpen
        // this.renderer.addClass(this.elementRef, "open");
    }
}