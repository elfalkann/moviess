
const modal = document.getElementById("emailModal");
const saveBtn = document.getElementById("saveEmailBtn");

if (!localStorage.getItem("loggedInEmail")) {
  modal.style.display = "flex";
}
saveBtn.onclick = () => {
  const email = document.getElementById("emailInput").value.trim();
  if (!email) return alert("Email gir");

  let users = JSON.parse(localStorage.getItem("users")) || [];
  if (!users.includes(email)) users.push(email);

  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("loggedInEmail", email);

  modal.style.display = "none";
};
document.querySelectorAll(".film").forEach(film => {
  film.onclick = () => {
    const email = localStorage.getItem("loggedInEmail");
    if (!email) return;

    const filmName = film.dataset.film;
    const video = film.dataset.video;

    let logs = JSON.parse(localStorage.getItem("logs")) || [];
    logs.push({
      email,
      film: filmName,
      time: new Date().toLocaleString()
    });

    localStorage.setItem("logs", JSON.stringify(logs));

    window.open(video, "_blank");
  };
});
