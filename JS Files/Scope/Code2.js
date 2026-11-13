// Temporal Dead Zone (TDZ) Example
let a = 10;

{
    console.log('Value Of A Inside Block:', a); // can't access a before init because it is declared with let 
    // inside the block, so it is not accessible outside of its block scope. (We're Trying to access a in TDZ)
    let a = 1;
}

// Temporal Cause it's depends on the time of execution, not initialization.

{
    // TDZ Starts
    const fun = () => console.log(msg);

    let msg = 'Hello Coder Dost'; // TDZ Ends (So when function is executing we've the value of msg so it will print the value of msg)
    fun();
}