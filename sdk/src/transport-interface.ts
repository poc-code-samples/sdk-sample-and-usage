export interface Transport {
    get(uri: string): Promise<string>
}
