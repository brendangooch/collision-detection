/**
 * 
 */

export function pointInRectangle(px: number, py: number, rx: number, ry: number, rw: number, rh: number): boolean {
    return px >= rx - (rw / 2) && px <= rx + (rw / 2) && py >= ry - (rh / 2) && py <= ry + (rh / 2);
}