import { WebTransport } from './../../shared/httpWeb/index';

export const transportFactory = () => {
  return new WebTransport();
}
