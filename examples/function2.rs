fn bar(bar_arg: &bool) -> &bool {
    return bar_arg;
}

fn main() {
    let mut b: bool = false;
    let a: &bool = bar(&b);
    displaybool(*a);
}