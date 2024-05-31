/**
 * 
 */

import { distanceBetween } from "@brendangooch/maths";

export function circleInCircle(c1x: number, c1y: number, c1radius: number, c2x: number, c2y: number, c2radius: number): boolean {
    return distanceBetween(c1x, c1y, c2x, c2y) <= c1radius + c2radius;
}