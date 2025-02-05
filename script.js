const form = document.getElementById('register');
console.log(form);

// Nested elements
console.log(form.elements);

const username = form.elements.username;

const email = form.elements.email;

console.log(username);
console.log(email);


username.addEventListener("input", function(e) {
    // console.log("Data prop: ". e.data);
    console.log("Value: ", e.target.value);

    const value =  e.target.value;

    if (["user1", "user2"].includes(value)) {
        console.log(`Sorry username: ${value} is taken.`);
    }
});

email.addEventListener("change", function(e) {
    console.log(e.target.value);

    const value =  e.target.value;

    if (["abe123@gmail.com"].includes(value)) {
        console.log(`Email already exists ${value}.`);
    }
});