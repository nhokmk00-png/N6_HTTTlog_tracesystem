document.querySelector('.edit-user-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent actual form submission
    alert('Thông tin người dùng đã được cập nhật!');
    window.location.href = 'users.html'; // Redirect back to the user list
});