var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, HostBinding, Renderer2, ElementRef, ChangeDetectorRef } from "@angular/core";
import { SuiDimmer } from "../../dimmer";
var SuiModalDimmer = (function (_super) {
    __extends(SuiModalDimmer, _super);
    function SuiModalDimmer(renderer, element, changeDetector) {
        var _this = _super.call(this, renderer, element, changeDetector) || this;
        _this._modalsDimmerClasses = true;
        _this.isClickable = false;
        return _this;
    }
    return SuiModalDimmer;
}(SuiDimmer));
__decorate([
    HostBinding("class.page"),
    HostBinding("class.modals"),
    __metadata("design:type", Boolean)
], SuiModalDimmer.prototype, "_modalsDimmerClasses", void 0);
SuiModalDimmer = __decorate([
    Component({
        selector: "sui-modal-dimmer",
        template: "<ng-content></ng-content>",
        styles: ["\n        :host.ui.dimmer:not(.hidden) {\n            transition: none;\n            overflow-y: auto;\n            display: flex !important; \n        }\n    "]
    }),
    __metadata("design:paramtypes", [Renderer2, ElementRef, ChangeDetectorRef])
], SuiModalDimmer);
export { SuiModalDimmer };
//# sourceMappingURL=dimmer.js.map