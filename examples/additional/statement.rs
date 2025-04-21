fn main() {
    let a: bool = true;
    let b : bool = bar(a);
}

fn bar(bar_arg: bool) -> bool {
    let a :&mut bool = &mut bar_arg;
    return bar_arg;
}