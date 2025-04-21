// Output: 32 48
fn main() {
    let mut a: Box<i32> = Box::new(32);
    let b: &Box<i32> = &a;
    displayi32(**b); // line 1
    *a = 48; // line 2
    displayi32(*a);
}