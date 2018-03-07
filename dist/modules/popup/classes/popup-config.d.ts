import { PositioningPlacement } from "../../../misc/util/index";
export declare type PopupTrigger = "hover" | "click" | "outsideClick" | "focus" | "manual";
export declare type PopupSize = "mini" | "tiny" | "small" | "large" | "huge";
export declare type PopupWidth = "wide" | "very wide" | "flowing";
export declare const PopupTrigger: {
    Hover: PopupTrigger;
    Click: PopupTrigger;
    OutsideClick: PopupTrigger;
    Focus: PopupTrigger;
    Manual: PopupTrigger;
};
export interface IPopupConfig {
    header?: string;
    text?: string;
    placement?: PositioningPlacement;
    trigger?: PopupTrigger;
    isInverted?: boolean;
    delay?: number;
    isBasic?: boolean;
    transition?: string;
    transitionDuration?: number;
}
export declare class PopupConfig implements IPopupConfig {
    header?: string;
    text?: string;
    placement: PositioningPlacement;
    trigger: PopupTrigger;
    isInverted: boolean;
    delay: number;
    isBasic: boolean;
    transition: string;
    size: PopupSize;
    width: PopupWidth;
    transitionDuration: number;
    constructor(defaults?: IPopupConfig);
}
