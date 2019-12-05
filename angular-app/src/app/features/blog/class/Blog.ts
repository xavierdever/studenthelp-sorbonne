export interface BlogInterface {
    title: string;
    image: string;
    description: string;
    cols: number;
    rows: number;
}

export class Blog {
    private _title: string;
    private _image: string;
    private _description: string;
    private _cols: number;
    private _rows: number;

    constructor(title: string, image: string, description: string) {
        this._title = title;
        this._image = image;
        this._description = description;
        this._cols = 1;
        this._rows = 2;
    }

    /**
     * Getter title
     */
    public get title(): string {
        return this._title;
    }

    /**
     * Setter title
     */
    public set title(value: string) {
        this._title = value;
    }

    /**
     * Getter image
     */
    public get image(): string {
        return this._image;
    }

    /**
     * Setter image
     */
    public set image(value: string) {
        this._image = value;
    }

    /**
     * Getter description
     */
    public get description(): string {
        return this._description;
    }

    /**
     * Setter description
     */
    public set description(value: string) {
        this._description = value;
    }

    /**
     * Getter cols
     */
    public get cols(): number {
        return this._cols;
    }

    /**
     * Setter cols
     */
    public set cols(value: number) {
        this._cols = value;
    }

    /**
     * Getter rows
     */
    public get rows(): number {
        return this._rows;
    }

    /**
     * Setter rows
     */
    public set rows(value: number) {
        this._rows = value;
    }
}

