fn main() {
    let mut a: Box<i32> = Box::new(32);
    let b: &Box<i32> = &a;
    displayi32(**b);
    *a = 48;
    displayi32(*a);
}
