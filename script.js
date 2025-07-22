document.getElementById('verifyBtn').addEventListener('click', verifyStudent);

function verifyStudent() {
  const idInput = document.getElementById('identifier');
  const id = idInput.value.trim();
  const resultBox = document.getElementById('result');

  if (!id) {
    alert('Please enter a valid Email or ID');
    return;
  }

  resultBox.textContent = 'Verifying...';

  // Simulate async verification (dummy)
  setTimeout(() => {
    // Dummy check — in real app you'd fetch from API
    const dummyData = {
      name: "John Doe",
      email: "john@example.com",
      certificate: "https://example.com/certificate.pdf",
    };

    // Simple check to mimic "found" or "not found"
    if (id.toLowerCase() === dummyData.email.toLowerCase() || id === "12345") {
      resultBox.innerHTML = `
        <p><strong>Name:</strong> ${dummyData.name}</p>
        <p><strong>Email:</strong> ${dummyData.email}</p>
        <p><a href="${dummyData.certificate}" target="_blank" rel="noopener">View Certificate</a></p>
      `;
    } else {
      resultBox.textContent = 'No record found for the given Email or ID.';
    }
  }, 1200);
}
