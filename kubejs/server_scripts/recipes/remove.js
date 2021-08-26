// priority: 100

events.listen('recipes', function (event) {

  var idRemove = [

    // Oxidized
    'oxidized:copper_nugget', // Duplicate recipe.
  ]

  idRemove.forEach(function (remove) {
    event.remove({id: remove})
  })

  var outputRemove = [
  ]

  outputRemove.forEach(function (remove) {
    event.remove({output: remove})
  })

})
