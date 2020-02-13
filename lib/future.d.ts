export default class Future<L, R> {
    private promise;
    reject: (l: L) => void;
    resolve: (r: R) => void;
    constructor();
    get(): Promise<R>;
}
