document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('bookingForm');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const petName = form.querySelector('[name="petName"]').value.trim();
    const ownerName = form.querySelector('[name="ownerName"]').value.trim();
    const contact = form.querySelector('[name="contact"]').value.trim();
    const service = form.querySelector('[name="service"]').value;
    const subService = form.querySelector('[name="subService"]').value;
    const date = form.querySelector('[name="date"]').value;
    const time = form.querySelector('[name="time"]').value;

    if (!petName || !ownerName || !contact || !service || !subService || !date || !time) {
      alert('Please fill in all fields.');
      return;
    }

    const newBooking = {
      petName,
      ownerName,
      service,
      subService,
      date,
      time,
      contact
    };

    addBookingToTable(newBooking);
    form.reset();
    alert("Booking submitted and added to the table!");
  });
});
