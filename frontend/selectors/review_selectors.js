export const mergeReview = (reservations, review)=> {
  if (reservations[0]) {
    const idx = reservations.indexOf(reservations.find(el => el.id === review.reservation_id));
    reservations[idx].reviewed = true;
  }

  return reservations;
}
