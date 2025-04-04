{
    let a: i32 = {
        let b: i32 = 42;
        b;
        b
    }
    let b: i32 = 64;
    a + b
}