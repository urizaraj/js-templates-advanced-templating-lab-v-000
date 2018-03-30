const recipeFormTemplate = document.getElementById('recipe-form-template').innerHTML
const main = document.getElementById('main')
const recipeTemplate = document.getElementById('recipe-template').innerHTML

function gei(id) {
  document.getElementById(id)
}
function gen(name) {
  document.getElementsByName(name)
}

Handlebars.registerHelper('displayIngredient', function(ingredient) {
  return new Handlebars.SafeString(`<li> ${ingredient} </li>`)
})

function init() {
  const template = Handlebars.compile(recipeFormTemplate)
  const html = template()
  main.innerHTML = html
}

Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial').innerHTML)





function createRecipe() {
  recipe = {
    name: gei('name').value,
    description: gei('description').value,
    ingredients: gen('ingredients').values()
  }

  template = Handlebars.compile(recipeTemplate)
  const html = template(recipe)
  main.innerHTML = html
}








document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
