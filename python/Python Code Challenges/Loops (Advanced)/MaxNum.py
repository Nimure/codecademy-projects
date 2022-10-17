#3. Max Num
#Here is a more traditional coding problem for you. This function will be used to find the maximum number in a list of numbers. This can be accomplished using the max() function in python, but as a challenge, we are going to manually implement this function.

#Write your function here
def max_num(nums):
  maximum = 0
  for number in nums:
     if number > maximum:
      maximum = number
  return maximum

#Uncomment the line below when your function is done
#print(max_num([50, -10, 0, 75, 20]))
