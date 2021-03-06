
declare module 'grpc' {

  namespace grpc {
    function load(options: LoadOptions): any;

    class Server {
      addProtoService(service: any, impl: any): void;
      bind(hostPort: string, cred: any): void;
      start(): void;
      forceShutdown(): void;
    }

    class credentials {
      static createInsecure(): any;
    }

    class ServerCredentials {
      static createInsecure(): any;
    }

    interface LoadOptions {
      root: string;
      file: string;
    }
  }

  export = grpc;

}
