import { LocalStyles } from "@paperbits/common/styles";

export class CustomWidgetModel {
    public name: string;
    public uri: string | undefined;
    public inheritStyling: boolean;

    /**
     * Local styles.
     */
    public styles: LocalStyles;

    constructor() {
        this.styles = {};
    }
}