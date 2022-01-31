import * as React from 'react';
import { Toast } from '../core/types';
import { ErrorTheme } from './error';
import { LoaderTheme } from './loader';
import { CheckmarkTheme } from './checkmark';
export declare type IconThemes = Partial<{
    success: CheckmarkTheme;
    error: ErrorTheme;
    loading: LoaderTheme;
}>;
export declare const ToastIcon: React.FC<{
    toast: Toast;
}>;
