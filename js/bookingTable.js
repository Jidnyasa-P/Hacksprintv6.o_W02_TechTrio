function addBookingToTable(item) {
  const table = document.getElementById('bookingTable');

  const row = document.createElement('tr');
  row.innerHTML = `
    <td class="py-2 px-4 border-b">${item.petName}</td>
    <td class="py-2 px-4 border-b">${item.ownerName}</td>
    <td class="py-2 px-4 border-b">${item.service}</td>
    <td class="py-2 px-4 border-b">${item.date}</td>
    <td class="py-2 px-4 border-b">${item.time}</td>
    <td class="py-2 px-4 border-b">${item.contact}</td>
  `;
  table.appendChild(row);
  
}
