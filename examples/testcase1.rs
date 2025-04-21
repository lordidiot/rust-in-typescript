// Output: 0 3 6 9
fn main() {
    let mut i: i32 = 0;
    while !(i == 10) {
        if i % 3 == 0 {
            displayi32(i);
        }
        i = i + 1;
    }
}