function submitFeedback(event) {
    // 1. **Prevent Default Action (Crucial if inside a form)**
    // Stop the form from submitting and refreshing the page
    if (event) {
        event.preventDefault(); 
    }

    // 2. Data Retrieval (No change needed here)
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;

    // **Remove the line submitButton.onclick = submitFeedback;**

    // 3. User Feedback and Display
    alert('Thank you for your valuable feedback');

    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;

    document.getElementById('userInfo').style.display = 'block';

    // **Remove the keydown listener from inside the function.**
}

// =========================================================
// ✅ CORRECT SETUP (Outside the function, runs only once)
// =========================================================

// 1. Find the button when the page loads
const submitButton = document.getElementById('submitBtn');

// 2. Attach the submitFeedback function to the button's click event
submitButton.addEventListener('click', submitFeedback);

// 3. Attach the Enter key listener once globally
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        // You might want to prevent the default here too if it causes a form submission
        event.preventDefault(); 
        submitFeedback();
    }
});