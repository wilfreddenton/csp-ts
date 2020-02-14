export default class Channel<T> {
    private buffer;
    private waiters;
    private closed;
    private zero;
    constructor(zero: T);
    send(item: T): void;
    receive(): Promise<T>;
    close(): void;
}
