// Temporal Dead Zone (TDZ) Example

{
    console.log('Value Of A Inside Block:', a); // can't access a before init because it is declared with let 
    // inside the block, so it is not accessible outside of its block scope. (We're Trying to access a in TDZ)
    let a = 1;
}