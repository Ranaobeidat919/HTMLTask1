document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('myForm');
    const table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        const newRow = table.insertRow();
        const nameCell = newRow.insertCell(0);
        const emailCell = newRow.insertCell(1);

        nameCell.textContent = name;
        emailCell.textContent = email;

        form.reset();
    });
});
