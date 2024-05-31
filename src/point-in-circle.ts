/**
 * 
 */

import { distanceBetween } from "@brendangooch/maths";

export function pointInCircle(px: number, py: number, cx: number, cy: number, radius: number): boolean {
    return distanceBetween(cx, cy, px, py) <= radius;
}