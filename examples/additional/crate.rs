fn bar(bar_arg: &bool, bar_arg2: &bool) -> &bool {
    bar_arg
}

fn main() {
    let mut b: bool = false;
    let mut b2: bool = true;
    let result: &bool = bar(&b, &b2);
    result;
    let c :&mut bool = &mut b;
}