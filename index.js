const recipeFormTemplate = document.getElementById('recipe-form-template')

function init() {
  const template = Handlebars.compile(recipeFormTemplate)
  const html = template()
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
