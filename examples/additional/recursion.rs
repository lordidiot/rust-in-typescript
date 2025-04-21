fn add(x: i32, y: i32) -> i32 {
    if y == 0 {
        return x;
    } else {
        return add(x + 1, y - 1);
    }
}

fn main() {
    let a: i32 = 32;
    let b: i32 = 64;
    let c: i32 = add(a, b);
    displayi32(c);
}