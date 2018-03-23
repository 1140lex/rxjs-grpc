export interface GenericServerBuilder<T> {
    start(address: string, credentials?: any): void;
    forceShutdown(): void;
}
export declare function serverBuilder<T>(protoRoot: string, protoFile: string, packageName: string): T & GenericServerBuilder<T>;
export declare type ClientFactoryConstructor<T> = new (address: string, credentials?: any, options?: any) => T;
export declare function clientFactory<T>(protoRoot: string, protoFile: string, packageName: string): ClientFactoryConstructor<T>;
