{
    let cond: bool = true;
    let a: i32 = 32;
    let b: i32 = 64;
    let mut c: &i32 = &a;
    if false {
        c = &a;
    } else {
        c = &b;
    }
    *c
}