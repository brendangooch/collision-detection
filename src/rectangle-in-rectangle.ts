/**
 * 
 */

import { rangeIntersect } from "@brendangooch/maths";

export function rectangleInRectangle(
    r1x: number,
    r1y: number,
    r1w: number,
    r1h: number,
    r2x: number,
    r2y: number,
    r2w: number,
    r2h: number
): boolean {
    return (
        rangeIntersect(r1x - (r1w / 2), r1x + (r1w / 2), r2x - (r2w / 2), r2x + (r2w / 2)) &&
        rangeIntersect(r1y - (r1h / 2), r1y + (r1h / 2), r2y - (r2h / 2), r2y + (r2h / 2))
    );
}