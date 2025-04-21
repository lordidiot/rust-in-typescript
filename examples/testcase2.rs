// Output: 123
fn foo(x: i32) -> Box<i32> {
    let b: Box<i32> = Box::new(x);
    return b;
}

fn main() {
    let a: Box<i32> = foo(123);
    displayi32(*a);
}