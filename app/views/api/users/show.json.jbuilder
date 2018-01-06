json.extract! @user, :username, :id
json.favorites do
  json.array! @user.favorites do |favorite|
    json.partial! 'api/favorites/show.json.jbuilder', favorite: favorite
  end
end
@user.reservations do |reservation|
  json.partial! 'api/reservations/show.json.jbuilder', reservation: reservation
end
