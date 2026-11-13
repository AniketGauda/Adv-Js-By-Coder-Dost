// Module Scope.

// So if you declare a var with one file so in another file you can access it if you are not using module system.
// Sometimes This will lead to problems / unexpected behaviour.
// So , <Script type="module"> is used to avoid this problem. It will create a module scope for each file 
// and variables declared in one file will not be accessible in another file.

// But if you want to access a variable from another file then you can use export and import keywords.