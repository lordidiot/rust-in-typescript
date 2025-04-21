// Error: cannot borrow a as mutable because it is also borrowed as immutable
fn main() {
    let mut a: i32 = 32;
    let b: &i32 = &a;
    let c: &mut i32 = &mut a;
    *c = 64;
    displayi32(*b);
}