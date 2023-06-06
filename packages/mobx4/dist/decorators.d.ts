import { IReactionPublic, IReactionDisposer } from './mobx.js';
/**
 * 绑定放到 onEnable, onDisable,
 * 如果用户不希望observe, 可以在 onLoad 中执行 this.enable = false;
 */
export declare function observer(Component: Function): void;
export declare function render(target: any, key: string, _?: TypedPropertyDescriptor<() => void>): void;
export declare function react<T>(expression: (r: IReactionPublic) => T, effect: (arg: T, r: IReactionPublic) => void): IReactionDisposer;
export declare function reactor(target: any, key: string, descriptor?: TypedPropertyDescriptor<() => IReactionDisposer>): void;
export declare function reactor<T>(expression: (r: IReactionPublic) => T): (target: any, key: string, descriptor: TypedPropertyDescriptor<(arg: T) => void>) => void;
