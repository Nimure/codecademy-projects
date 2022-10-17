#3. Win Percentage
#Next, we will create a function which calculates the percentage of games won. In order to do this, we will need to know how many total games there were and divide the number of wins by the total number of games. For this function, there will be two input parameters, the number of wins and the number of losses. We also need to make sure that we return the result as a percentage (in the range of 0 to 100).

# Write your win_percentage function here:
def win_percentage(wins, losses):
  return ((wins / (wins + losses)) * 100)
# Uncomment these function calls to test your win_percentage function:

#print(win_percentage(5, 5))
# should print 50
#print(win_percentage(10, 0))
# should print 100
