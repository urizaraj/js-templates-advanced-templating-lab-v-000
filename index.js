const recipeFormTemplate = document.getElementById('recipe-form-template').innerHTML
const main = document.getElementById('main')

function init() {
  const template = Handlebars.compile(recipeFormTemplate)
  const html = template()
  main.innerHTML = html
}

Handlebars.registerPartial('recipePartial', document.getElementById('recipe-partial').innerHTML)

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
