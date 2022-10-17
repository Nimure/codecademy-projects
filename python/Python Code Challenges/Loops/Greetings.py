#2. Greetings
#You are invited to a social gathering, but you are tired of greeting everyone there. Luckily we can create a function to accomplish this task for us. In this challenge, we will take a list of names and prepend the string 'Hello, ' before each name.

#Write your function here
def add_greetings(names):
  new_lst = []
  for name in names:
    new_lst.append('Hello, ' + name)
  return new_lst


#Uncomment the line below when your function is done
#print(add_greetings(["Owen", "Max", "Sophie"]))
