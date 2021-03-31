import { IGetterOptions } from './getter-options';
import { Transport } from '../transport-interface';




export class Getter {

    private transport: Transport | null;
    
    constructor(options?: IGetterOptions) {
        this.transport = null;
        if(options && options.transportFactory) {
            this.init(options);
        }
    }

    public init(options: IGetterOptions) {
        if(!options.transportFactory)
            throw new Error(`No transport factory specified`);

        this.transport = options.transportFactory();
    }

    public async getData (uri: string) {
        if(!this.transport) throw new Error(`Logger uninitialized. Missing call to init`);

        const data = await this.transport.get(uri);
        return data;
    }
}
