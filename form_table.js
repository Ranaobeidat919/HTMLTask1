document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('dataForm');
    const tableBody = document.getElementById('dataTable').querySelector('tbody');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form from submitting normally

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Create a new row
        const newRow = document.createElement('tr');

        // Create and append cells
        const nameCell = document.createElement('td');
        nameCell.textContent = name;
        newRow.appendChild(nameCell);

        const emailCell = document.createElement('td');
        emailCell.textContent = email;
        newRow.appendChild(emailCell);

        const messageCell = document.createElement('td');
        messageCell.textContent = message;
        newRow.appendChild(messageCell);

        tableBody.appendChild(newRow);

        // Clear the form
        form.reset();
    });
});

