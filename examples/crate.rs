fn foo() -> i32 {
    let foo_variable: i32 = 42;
    foo_variable
}

fn bar(bar_arg: bool) -> bool {
    let bar_variable: bool = 
        if bar_arg {
            false
        } else {
            true
        };
    bar_variable
}

fn main() {
    let result: i32 = foo();
    let flipped: bool = bar(true);
}