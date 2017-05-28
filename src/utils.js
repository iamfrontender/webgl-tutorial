'use strict';

export function rand(down, up) {
    if (up === undefined) {
        up = down;
        down = 0;
    }

    return down + Math.random() * (up - down);
}