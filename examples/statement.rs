fn main() {
    let mut a : Box<i32> =  Box::new(32);
    let mut a2 : Box<i32> =  Box::new(16);
    let b : & Box<i32> = & a;
    let c : &mut &Box<i32> = &mut b;
    *c = &a2;
}
