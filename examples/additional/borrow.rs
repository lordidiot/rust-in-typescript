fn main() {
    let mut owner: Box<i32> = Box::new(32);
    let immutable_ref: &Box<i32> = &owner;
    displayi32(**immutable_ref);
    let mutable_ref: &mut Box<i32> = &mut owner;
    **mutable_ref = 48;
    displayi32(**&owner);
    let moved: Box<i32> = owner;
    displayi32(*moved);
}
