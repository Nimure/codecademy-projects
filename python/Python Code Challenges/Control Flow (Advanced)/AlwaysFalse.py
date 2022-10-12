#3. Always False
#There are some situations that you normally want to avoid when programming using conditional statements. One example is a contradiction. This occurs when your condition will always be false no matter what value you pass into it. Let’s create an example of a function that contains a contradiction.

# Write your always_false function here:
def always_false(num):
  if num > num > num:
    return True
  else:
    return False

# Uncomment these function calls to test your always_false function:
#print(always_false(0))
# should print False
#print(always_false(-1))
# should print False
#print(always_false(1))
# should print False
