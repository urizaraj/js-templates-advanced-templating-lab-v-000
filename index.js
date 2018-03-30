


function init() {
  const recipeFormTemplate = document.getElementById('recipe-form-template').innerHTML
  const main = document.getElementById('main')

  const template = Handlebars.compile(recipeFormTemplate)
  const html = template()
  main.innerHTML = html
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
