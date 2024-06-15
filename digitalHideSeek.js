const hide = myString => {
    let hideLocation = myString;
    const seek = () => hideLocation;
    return seek;
}

let startGame = hide("under the bridge")
console.log(startGame());

//Attempting to access hideLocation directly will result in a ReferenceError

//Explanation:
//The hideLocation variable is declared within the hide function and has function scope.
//It's not directly accessible outside of the function body.