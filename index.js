const recipeFormTemplate = document.getElementById('recipe-form-template').innerHTML
const main = document.getElementById('main')
const recipeTemplate = document.getElementById('recipe-template').innerHTML

function init() {
  register()
  const template = Handlebars.compile(recipeFormTemplate)
  const html = template({onsubmit: 'createRecipe()'})
  main.innerHTML = html
}

function createRecipe() {
  recipe = {
    name: document.getElementById('name').value,
    description: document.getElementById('description').value,
    ingredients: document.getElementsByName('ingredients').values()
  }

  template = Handlebars.compile(recipeTemplate)
  const html = template(recipe)
  main.innerHTML = html
}

function register() {
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString(`<li> ${ingredient} </li>`)
  })
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial').innerHTML)
  Handlebars.registerPartial('recipeFormPartial', document.getElementById('recipe-form-partial').innerHTML)
}

function displayEditForm() {
  const template = Handlebars.compile(recipeFormTemplate)
  const html = template({onsubmit: 'updateRecipe()'})
  main.innerHTML = html
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
