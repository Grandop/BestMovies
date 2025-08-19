export const handleRatingColor = (rating: number) => {
  const rounded = Math.round(rating * 10) / 10

  if (rounded >= 7.5) return 'green'
  if (rounded >= 6.1) return 'orange'
  return 'red'
}
