#5. Reversed List
#For the final challenge, we are going to test two lists to see if the second list is the reverse of the first list. There are a few different ways to approach this, but we are going to try a method that iterates through each of the values in one direction for the first list and compares them against the values starting from the other direction in the second list.

def reversed_list(lst1, lst2):
  for index in range(len(lst1)):
    if (lst1[index] != lst2[len(lst2) - 1 - index]):
      return False
  return True


#Uncomment the lines below when your function is done
#print(reversed_list([1, 2, 3], [3, 2, 1]))
#print(reversed_list([1, 5, 3], [3, 2, 1]))
