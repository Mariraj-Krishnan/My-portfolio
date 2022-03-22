const projects = document.querySelector(".projects .container");
const modal = document.querySelector(".modal-container");
function projectRenderer() {
  const fragement = document.createDocumentFragment();
  details.forEach((el, index) => {
    const div = document.createElement("div");
    const img = document.createElement("img");
    div.classList.add(el.size);
    div.id = index;
    div.title = "Click for more details";
    div.dataset.title = el.title;
    img.src = el.thump;
    div.append(img);
    fragement.append(div);
  });
  projects.append(fragement);
  [...projects.querySelectorAll("div")].forEach((el) => {
    el.addEventListener("click", projectViewer);
  });
}
projectRenderer();
function projectViewer(ev) {
  modal.querySelector("h2").textContent = details[this.id].title;
  modal.querySelector("p").textContent = details[this.id].content;
  modal.querySelector(".responsive").textContent = details[this.id].responsive;
  modal.querySelector("img").src = details[this.id].image;
  modal.querySelector("a").href = details[this.id].link;
  modal.classList.add("active");
}
if (window.innerWidth < 1000) {
  document.querySelector(".message").classList.add("active");
}
