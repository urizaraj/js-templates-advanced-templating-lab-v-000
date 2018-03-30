const recipeFormTemplate = document.getElementById('recipe-form-template').innerHTML
const main = document.getElementById('main')
const recipeTemplate = document.getElementById('recipe-template').innerHTML

Handlebars.registerHelper('displayIngredient', function(ingredient) {
  return new Handlebars.SafeString(`<li> ${ingredient} </li>`)
})

function init() {
  const template = Handlebars.compile(recipeFormTemplate)
  const html = template()
  main.innerHTML = html
}

Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial').innerHTML)

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function createRecipe() {

}
