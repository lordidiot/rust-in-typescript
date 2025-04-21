// Error: cannot assign to a because it is borrowed
fn main() {
    let mut a: Box<i32> = Box::new(4);
    let mut b: Box<i32> = Box::new(6);
    let c: &Box<i32>;
    if true {
        c = &a;
    } else {
        c = &b;
    }
    *a = 2;
    *b = 4;
    displayi32(**c);
}