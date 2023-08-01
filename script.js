async function load() {
  const res = await fetch(
    "https://script.google.com/macros/s/AKfycbz7WeZKMaCktfKuGNK9BNkKGHi9FYSz7sfvgsI2GVVT2fNeIeo3XMEF9_RC6FbZ2faT/exec"
  );

  const events = await res.json();

  console.log({ events });

  const eventsContainer = document.getElementById("events-container");

  eventsContainer.innerHTML = "";

  for (let event of events) {
    eventsContainer.innerHTML += `
    <div class="card w-64 bg-base-100 shadow-xl image-full">
      <figure><img src="${event.Image}" alt="event" /></figure>
      <div class="card-body">
        <h2 class="card-title">${event.Name}</h2>
        <p>${event.Location}<br/>@ ${event.Date}</p>
        <div class="card-actions justify-end">
          <a class="btn btn-primary" href="${event.Link}" target="_blank">RSVP</a>
        </div>
      </div>
    </div>
    `;
  }
}

load();
