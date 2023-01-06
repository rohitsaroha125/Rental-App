export type HttpRequest = {
  url?: string | undefined;
  method: string;
  headers: any;
  params?: any;
  data?: any;
};
