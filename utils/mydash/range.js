export default function range(start = 0, end = 0, step = 1, isRight = false) {
    if (step <= 0) {
        throw new Error('Step value should be more than 0')
    }
    if (!end) {
        [start, end] = [end, start]
    }
    if (start > end) {
        step = step * (-1)
    }
    const arr = [];
    for (let i = start; Math.abs(i) < Math.abs(end); i += step) {
        if (isRight) {
            arr.push(end + start - step - i);
        } else {
            arr.push(i);
        }
    }
    return arr;
}