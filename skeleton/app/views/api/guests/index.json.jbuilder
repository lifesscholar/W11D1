json.array! @guests.each do |guest|
  # json.name guest.name
  # json.age guest.age
  # json.favorite_color guest.favorite_color
  # json.set! guest.id do 
    json.partial! 'api/guests/guest', guest: guest
  # end
end