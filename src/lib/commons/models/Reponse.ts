export class Response<T> {
    constructor(
        public data: T | null = null,
        public status: number | null = null,
        public message: string | null = null,
        public ok: boolean = true
    ) {}
}
