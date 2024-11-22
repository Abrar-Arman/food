const recipeCon = document.querySelector(".Recipes .row");
const save = document.querySelector(".save");
let data;

async function getRecipes() {
  const res = await fetch("https://dummyjson.com/recipes");
  data = await res.json();
  return data.recipes;
}
async function renderRecipes(list) {
  let recipes = await getRecipes();
  console.log(recipes);
  const content = recipes.map((item) => {
    const tags = item.tags.map(
      (tag) =>
        `<span class='d-inline-block py-1 px-2 rounded-2 ' style='font-size:11px'>${tag}</span>`
    );

    return `
             <div class="col-md-6 col-lg-3">
                        <div class="card w-100 mt-1  ">
                            <div class="over-lay position-relative p-1">
                                <img src=${
                                  item.image
                                } class="card-img-top w-100" alt="" >
                                <div class='position-absolute top-0 end-0 icon'>
                                <i class='fa-regular fa-bookmark' onclick="addToSave('${
                                  item.name
                                }')" class="fa-regular fa-bookmark"></i>
                                </div>
                            </div>
                            <div class="card-body" >
                                <div class="d-flex gap-2 justify-content-between align-items-center" >
                                    <h2 style='color:#212121'>${item.name}</h2>
                                    <div class="info">
                                        <span class='${
                                          item.difficulty == "Easy"
                                            ? "easy"
                                            : item.difficulty == "Medium"
                                            ? "medium"
                                            : "diff"
                                        } d-block rounded-2 px-2 py-1'>${
      item.difficulty
    }</span>
                                        </div>
                                        </div>
                                        <div class='tag d-flex gap-3 flex-wrap mt-3'>
                                          ${tags.join("")}
                                         </div>
                                        </div>
                                        </div>
                                        </div>
                                       `;
  });
  console.log(content);
  recipeCon.innerHTML = content.join("");
}
renderRecipes();
//save recipe
function addToSave(name) {
  save.style.display = "block";

  const saved = `The Recipe ${name} Add To Read`;
  save.textContent = saved;
  setTimeout(() => {
    save.style.display = "none";
  }, [2500]);
}
