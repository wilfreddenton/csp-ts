export default class Channel<T> {
    private buffer;
    private emitter;
    private zero;
    private closed;
    constructor(zero: T);
    send(item: T): void;
    receive(): Promise<T>;
    close(): void;
}
