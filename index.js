const recipeFormTemplate = document.getElementById('recipe-form-template')

function init() {
  const template = Handlebars.compile(recipeFormTemplate)
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
