// Variable Shadowing

let a = 10; // shadowed variable
{
    let a = 20; // This 'a' is shadowing the outer 'a'
    console.log('Value Of A Inside Block:', a); // 20
}