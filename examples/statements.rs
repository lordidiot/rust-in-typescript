{
    let a: i32 = {
        let b: i32 = 42;
        b
    };
    let b: i32 = a;
    a + b
}