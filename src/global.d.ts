// En un archivo .d.ts en tu proyecto
declare global {
  namespace NodeJS {
    interface Global {
      meta: any;
    }
  }
}
