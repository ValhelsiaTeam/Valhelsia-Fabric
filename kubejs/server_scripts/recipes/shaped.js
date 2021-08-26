// priority: 10

events.listen('recipes', function (event) {

  // Minecraft
  event.shaped(Item.of('minecraft:cobweb', 1), [
    'AA',
    'AA'
  ], {
    A: 'minecraft:string'
  })

})
