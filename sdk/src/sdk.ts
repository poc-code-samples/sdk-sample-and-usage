import { IGetterOptions } from './service/getter-options';
import { Getter } from './service/getter';

export const initSDK = (options: IGetterOptions) => {
    return new Getter(options);    
}
