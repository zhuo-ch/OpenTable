json.extract! @restaurant, :id, :owner_id, :restaurant_name, :street_address,
  :city, :state, :restaurant_number, :cuisine, :description, :hours, :site, :zip
json.images @restaurant.photos.map { |photo| asset_path(photo.image.url) }
