{
    let a: i32 = 42;
    let b: &i32 = &a;
    let c: &&i32 = &b;
    a + *b + **c
}