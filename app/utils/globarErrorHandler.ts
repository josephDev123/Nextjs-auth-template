export class GlobalErrorHandler extends Error {
  code;
  msg;
  operational;
  constructor(msg: string, name: string, code: string, operational: boolean) {
    super(name);
    this.name = name;
    this.code = code;
    this.msg = msg;
    this.operational = operational;
  }
}
