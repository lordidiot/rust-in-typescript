// Output: 1
fn bar(x: &mut i32) -> &mut i32 {
    let y :&mut i32 = x;
    return y;
}

fn main() {
    let mut b : i32 = 1;
    let a: &mut i32 = bar(&mut b);
    displayi32(*a);
}