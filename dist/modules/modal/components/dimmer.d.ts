import { Renderer2, ElementRef, ChangeDetectorRef } from "@angular/core";
import { SuiDimmer } from "../../dimmer";
export declare class SuiModalDimmer extends SuiDimmer {
    private _modalsDimmerClasses;
    constructor(renderer: Renderer2, element: ElementRef, changeDetector: ChangeDetectorRef);
}
