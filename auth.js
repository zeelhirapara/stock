// --- SIGN UP LOGIC ---
const signupForm = document.getElementById('signupForm');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get user info from the form
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    // Use Firebase to create the user
    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Account was created successfully!
            const user = userCredential.user;
            console.log('Account created for:', user.email, 'with UID:', user.uid);
            
            // Now, create a document for this user in Firestore to store their name
            return db.collection('users').doc(user.uid).set({
                name: fullName,
                email: email,
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            });
        })
        .then(() => {
            // After saving their name, go to the main menu
            window.location.href = 'stock.html';
        })
        .catch((error) => {
            // If something went wrong, show an error
            alert(error.message);
        });
});


// --- LOGIN LOGIC ---
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get login info from the form
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Use Firebase to sign the user in
    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Login was successful!
            const user = userCredential.user;
            console.log('User logged in:', user.email);
            
            // Go to the main menu
            window.location.href = 'stock.html';
        })
        .catch((error) => {
            // If something went wrong (e.g., wrong password), show an error
            alert(error.message);
        });
});