const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});
