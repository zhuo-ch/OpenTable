export const fetchUser = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/users/${id}`
  })
}

export const destroyReservation = id => {
  return $.ajax({
    method: 'DELETE',
    url: `api/reservations/${id}`,
  })
}