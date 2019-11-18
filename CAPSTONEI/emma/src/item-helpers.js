export const findCategory = (categories=[], categoryId) =>
  categories.find(category => category.id === categoryId)

export const findItem = (items=[], itemId) =>
  items.find(item => item.id === itemId)

export const getItemForCategory = (items=[], categoryId) => (
  (!categoryId)
    ? items
    : items.filter(item => item.categoryId === categoryId)
)

export const countItemsForCategory = (items=[], categoryId) =>
  items.filter(item => item.categoryId === categoryId).length