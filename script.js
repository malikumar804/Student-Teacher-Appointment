const bookingForm = document.getElementById('booking-form');
const appointmentInfo = document.getElementById('appointment-info');

bookingForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const studentName = document.getElementById('student-name').value;
    const teacher = document.getElementById('teacher-select').value;
    const appointmentDate = document.getElementById('appointment-date').value;
    const appointmentTime = document.getElementById('appointment-time').value;

    if (!studentName || !teacher || !appointmentDate || !appointmentTime) {
        alert('Please fill out all fields.');
        return;
    }

    appointmentInfo.style.display = 'block';
    appointmentInfo.innerHTML = `
    <h2>Appointment Details</h2>
    <p><strong>Student:</strong> ${studentName}</p>
    <p><strong>Teacher:</strong> ${teacher}</p>
    <p><strong>Date:</strong> ${appointmentDate}</p>
    <p><strong>Time:</strong> ${appointmentTime}</p>
    <p>Your appointment has been successfully booked!</p>
  `;

    bookingForm.reset();
});
