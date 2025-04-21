fn main() {
    let mut a: bool = true;
    let b : bool = bar(a);
}

fn bar(bar_arg: bool) -> bool {
    bar_arg = false;
    return bar_arg;
}