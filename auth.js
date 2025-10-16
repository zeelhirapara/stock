document.addEventListener('DOMContentLoaded', () => {

    // --- Sign Up Logic ---
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // 1. CHOOSE YOUR SECRET GROUP CODE
            // IMPORTANT: Change "YOUR_SECRET_CODE" to a code only you and your team know.
            const secretGroupCode = "zeel2025"; 

            // 2. Get all values from the form
            const fullName = document.getElementById('fullName').value;
            const email = document.getElementById('signupEmail').value;
            const password = document.getElementById('signupPassword').value;
            const enteredGroupCode = document.getElementById('groupCode').value;
            
            // 3. VALIDATE: Check if the entered group code is correct
            if (enteredGroupCode !== secretGroupCode) {
                alert("The Group Code is incorrect. Please try again.");
                return; // Stop the function if the code is wrong
            }

            // If the code is correct, proceed with sign-up
            if (!fullName.trim()) {
                alert("Please enter your full name.");
                return;
            }

            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    // Create the user's profile in the database with the groupId
                    return db.collection('users').doc(user.uid).set({
                        fullName: fullName,
                        email: email,
                        groupId: "zeel_industries" // Assigns user to the group
                    });
                })
                .then(() => {
                    alert('Account created successfully!');
                    window.location.href = 'stock.html';
                })
                .catch((error) => {
                    console.error("Error signing up:", error);
                    alert(error.message);
                });
        });
    }

    // --- Login Logic ---
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;

            firebase.auth().signInWithEmailAndPassword(email, password)
                .then(() => {
                    window.location.href = 'stock.html';
                })
                .catch((error) => {
                    console.error("Error signing in:", error);
                    alert(error.message);
                });
        });
    }
});