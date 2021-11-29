var tinycolor = require("tinycolor2");




export function darken(color: string, amount: number) : string {
    return tinycolor(color).darken(100).toString();
}

export function lighten(color: string, amount: number) : string {
    return tinycolor(color).lighten(100).toString();
}