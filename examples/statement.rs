fn main() {
    let x: i32 = 5;
    let y: &mut i32 = &mut x;
    let z: &mut i32 = y;
    let q: &mut i32 = y;
}
