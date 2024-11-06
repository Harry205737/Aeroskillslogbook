async function loadEntries() {
  const response = await fetch('data/logbook.json');
  const entries = await response.json();
  const container = document.getElementById('logbook-entries');
  container.innerHTML = '';
  
  entries.forEach(entry => {
    const entryDiv = document.createElement('div');
    entryDiv.className = 'entry';
    entryDiv.innerHTML = `
      <strong>Date:</strong> ${entry.date} <br>
      <strong>Activity:</strong> ${entry.activity} <br>
      <strong>Hours:</strong> ${entry.hours}
    `;
    container.appendChild(entryDiv);
  });
}

function showEntryForm() {
  document.getElementById('entry-form').style.display = 'block';
}

function addEntry() {
  const date = document.getElementById('date').value;
  const activity = document.getElementById('activity').value;
  const hours = document.getElementById('hours').value;

  if (date && activity && hours) {
    alert("New entry added (update JSON file manually in GitHub).");
    document.getElementById('entry-form').style.display = 'none';
  } else {
    alert("Please fill out all fields.");
  }
}

window.onload = loadEntries;
