/**
 * 
 */

import { Vector2D } from "@brendangooch/maths";
import { pointInRectangle } from "./point-in-rectangle.js";

export function pointInRotatedRectangle(px: number, py: number, rx: number, ry: number, rw: number, rh: number, rotation: number): boolean {
    const rectCenter = new Vector2D(rx, ry);
    const tmp = new Vector2D(px, py);
    const cursor = tmp.subtract(rectCenter);
    cursor.angle -= rotation;
    cursor.addTo(rectCenter);
    return pointInRectangle(cursor.x, cursor.y, rx, ry, rw, rh);
}