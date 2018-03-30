const recipeFormTemplate = document.getElementById('recipe-form-template')
const main = document.getElementById('main')

function init() {
  const template = Handlebars.compile(recipeFormTemplate)
  const html = template()
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
