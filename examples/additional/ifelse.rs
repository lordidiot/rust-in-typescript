fn main() {
    let cond: bool = true;
    let mut c: i32 = 1;
    let mut d: i32 = 2;
    let b: &mut i32;
    
    if cond {
        b = &mut c;
    } else {
        b = &mut d;
    }
    b;
    b;
}