weight = 62

#ground shipping
if weight <= 2:
  price = 1.5
elif weight <= 6:
  price = 3
elif weight <= 10:
  price = 4
elif weight >= 10:
  price = 4.75
cost = price * weight + 20
print(cost)

premium = 125
print(premium)

#drone shipping
if weight <= 2:
  p_price = 4.5
elif weight <= 6:
  p_price = 9
elif weight <= 10:
  p_price = 12
elif weight >= 10:
  p_price = 14.25
p_cost = p_price * weight + 0
print(p_cost)

if cost <= p_cost:
  print("Gound shipping is cheaper")
elif cost <= premium:
  print("Gound shipping is cheaper")
elif premium <= cost:
  print("Premium shipping is cheaper")
elif premium <= p_cost:
  print("Premium shipping is cheaper")
elif p_cost <= cost:
  print("Drone shipping is cheaper")
elif p_cost <= premium: 
  print("Drone shipping is cheaper")