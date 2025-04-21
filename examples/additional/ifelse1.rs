fn main() {
    let mut a: Box<i32> = Box::new(4);
    let c: &Box<i32> = &a;
    if true {
        c;
        let d: &mut Box<i32> = &mut a;
    } else {
        c;
    }
    displayi32(*a);
}