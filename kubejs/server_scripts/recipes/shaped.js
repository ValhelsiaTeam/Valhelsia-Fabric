// priority: 10

events.listen('recipes', function (event) {

  // Minecraft
  event.shaped(Item.of('minecraft:cobweb', 1), [
    'AA',
    'AA'
  ], {
    A: 'minecraft:string'
  })
  
  // Alloy Forgery
  event.shaped(Item.of('alloy_forgery:deepslate_bricks_forge_controller', 1), [
    'AAA',
    'ABA',
    'AAA'
  ], {
    A: 'minecraft:deepslate_bricks',
    B: 'alloy_forgery:bricks_forge_controller'
  })
  event.shaped(Item.of('alloy_forgery:deepslate_bricks_forge_controller', 1), [
    'AAA',
    'ABA',
    'AAA'
  ], {
    A: 'minecraft:deepslate_bricks',
    B: 'alloy_forgery:stone_bricks_forge_controller'
  })
  event.shaped(Item.of('alloy_forgery:polished_blackstone_forge_controller', 1), [
    'AAA',
    'ABA',
    'AAA'
  ], {
    A: 'minecraft:polished_blackstone',
    B: 'alloy_forgery:bricks_forge_controller'
  })
  event.shaped(Item.of('alloy_forgery:polished_blackstone_forge_controller', 1), [
    'AAA',
    'ABA',
    'AAA'
  ], {
    A: 'minecraft:polished_blackstone',
    B: 'alloy_forgery:stone_bricks_forge_controller'
  })
  event.shaped(Item.of('alloy_forgery:end_stone_bricks_forge_controller', 1), [
    'AAA',
    'ABA',
    'AAA'
  ], {
    A: 'minecraft:end_stone_bricks',
    B: 'alloy_forgery:polished_blackstone_forge_controller'
  })
  event.shaped(Item.of('alloy_forgery:end_stone_bricks_forge_controller', 1), [
    'AAA',
    'ABA',
    'AAA'
  ], {
    A: 'minecraft:end_stone_bricks',
    B: 'alloy_forgery:deepslate_bricks_forge_controller'
  })
})
