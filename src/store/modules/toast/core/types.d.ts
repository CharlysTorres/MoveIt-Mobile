import { CSSProperties } from 'react';
export declare type ToastType = 'default' | 'success' | 'error' | 'loading' | 'blank' | 'custom';
export declare type ToastPosition = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
export declare type Renderable = JSX.Element | string | null;
export declare type IconName = 'check' | 'close';
export interface IconTheme {
    primary: string;
    secondary: string;
}
export declare type ValueFunction<TValue, TArg> = (arg: TArg) => TValue;
export declare type ValueOrFunction<TValue, TArg> = TValue | ValueFunction<TValue, TArg>;
export declare const resolveValue: <TValue, TArg>(valOrFunction: ValueOrFunction<TValue, TArg>, arg: TArg) => TValue;
export interface Toast {
    type: ToastType;
    id?: string;
    message: ValueOrFunction<Renderable, Toast>;
    icon?: Renderable;
    iconName?: IConName;
    duration?: number;
    pauseDuration?: number;
    iconTheme?: IconTheme;
    createdAt?: number;
    visible?: boolean;
    height?: number;
}
export declare type ToastOptions = Partial<Pick<Toast, 'id' | 'icon' | 'duration' | 'ariaProps' | 'style' | 'position' | 'iconTheme'>>;
export declare type DefaultToastOptions = ToastOptions & {
    [key in ToastType]?: ToastOptions;
};
