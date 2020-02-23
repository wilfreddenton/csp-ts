declare class BufferedChannel<T> {
    private buffer;
    private waiters;
    private closed;
    private zero;
    private slotsRemaining;
    constructor(zero: T, length?: number);
    send(item: T): Promise<void>;
    receive(): Promise<T>;
    close(): void;
}
declare class Channel<T> extends BufferedChannel<T> {
    constructor(zero: T);
}
export { BufferedChannel, Channel };
