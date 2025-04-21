// Error: cannot borrow c as mutable because it is also borrowed as immutable
fn main() {
    let mut a: i32 = 2;
    let b : &i32= &a;
    while true {
        b;
        let c: &mut i32 = &mut a;
    }
}