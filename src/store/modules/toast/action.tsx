
import {
  Toast
} from './core/types';

export function showToast({
  type = 'default',
  message,
  iconName,
  duration = 4000,
}: Toast) {
  return {
    type: '@toast/SHOW',
    payload: { type, message, iconName, duration },
  }
}

export function hideToast() {
  return {
    type: '@toast/HIDE',
  }
}