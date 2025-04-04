fn main() {
    let mut a = 32;
    let b = &a;
    a = 64; // cannot assign to `a` because it is borrowed
    let c = &mut a;
    println!("a is {}", a);
    println!("b is {}", b);
    *c += 1;
    println!("c is {}", c);
}
