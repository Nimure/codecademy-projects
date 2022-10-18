#5. Remainder
#For the final challenge in this group, we are going to take the remainder of two numbers while performing other mathematical operations on them. We are going to multiply the numerator by 2 and divide the denominator by 2. After the two values have been modified, we will divide them and return the remainder. 

# Write your remainder function here:
def remainder(num1, num2):
  twice = num1 * 2
  half = num2 / 2
  return (twice % half)
# Uncomment these function calls to test your remainder function:
#print(remainder(15, 14))
# should print 2
#print(remainder(9, 6))
# should print 0
