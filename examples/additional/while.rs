fn main() -> i32 {
    let mut a: i32 = 0;
    let mut b: i32 = 0;
    while true {
        if a == 10 {
            break;
        }
        a = a + 1;
        b = b + 2;
    }
    b
}