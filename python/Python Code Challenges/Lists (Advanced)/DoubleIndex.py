#4. Double Index
#Our next function will double a value at a given position. We will provide a list and an index to double. This will create a new list by replacing the value at the index provided with double the original value. If the index is invalid then we should return the original list.

#Write your function here
def double_index(lst, index):
  # Checks to see if index is too big
  if index >= len(lst):
    return lst
  else:
    # Gets the original list up to index
    new_lst = lst[0:index]
 # Adds double the value at index to the new list 
  new_lst.append(lst[index]*2)
  #  Adds the rest of the original list
  new_lst = new_lst + lst[index+1:]
  return new_lst

#Uncomment the line below when your function is done
#print(double_index([3, 8, -10, 12], 2))
