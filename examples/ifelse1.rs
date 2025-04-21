fn main() {
    let mut a: i32 = 4;
    let mut b: i32 = 6;
    let mut c: &i32;
    if true {
        c = &a;
    } else {
        c = &b;
    }
    a = 2;
    b = 4;
    *c;
}