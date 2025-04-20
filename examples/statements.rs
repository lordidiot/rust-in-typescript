fn main() {
    let x: i32 = 5;
    let v :&i32 = &x;
    x = 1;
    v;
}
