import { IGetterOptions } from './getter-options';
export declare class Getter {
    private transport;
    constructor(options?: IGetterOptions);
    init(options: IGetterOptions): void;
    getData(uri: string): Promise<string>;
}
