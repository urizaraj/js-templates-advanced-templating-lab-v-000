const recipeFormTemplate = document.getElementById('recipe-form-template').innerHTML
const main = document.getElementById('main')

function init() {
  const template = Handlebars.compile(recipeFormTemplate)
  const html = template()
  console.log(template)
  console.log(html)
  main.innerHTML = html
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
