//---------------------------------------------
// ⚙️ Execution Context and Call Stack
//---------------------------------------------

function one() {
    console.log("one");
    two();
}

function two() {
    console.log("two");
    three();
}

function three() {
    console.log("three");
}

one();
two();
three();

/*
📜 Execution Flow:

1️⃣ Global Execution Context created
    -> one, two, three functions stored in memory

2️⃣ one() called → creates new EC → logs "one" → calls two()
3️⃣ two() called → new EC → logs "two" → calls three()
4️⃣ three() called → new EC → logs "three"
   (then pops back each completed function from call stack)

5️⃣ After one() done, two() called again → "two", "three"
6️⃣ Then three() → "three"

🧮 Final Output:
one
two
three
two
three
three
*/