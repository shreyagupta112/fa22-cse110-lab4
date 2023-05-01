1. 3 will be printed as the code starts with i being 0. In the for loop, i is increase by 1 price.length times. As the lenght of price is 3, i becomes 3 and is printed out. As i is initualized the the keyword var, there are no issues accessing the variable anywhere in the code.
2. 150 will be printed out because discountedPrice is equal ton prices[i]*(1-discount). 300 is the last element in prices sop 300(1-0.5) = 150 is printed out. As discountedPrice is initualized the the keyword var, there are no issues accessing the variable anywhere in the code. 
3. 150 becasue finalPrice = Math.round(discountedPrice * 100) / 100 = Math.round(150 * 100) / 100 = 150. As finalPrice is initualized the the keyword var, there are no issues accessing the variable anywhere in the code. 
4. [50,100,150] because it applies a sicoiunt of 0.5 to prices so element is half the value of the coresponding element in prices.
5. An error is casued because i was decalred with "let" and it is being called outsdie its block scope.
6. An error is caused becasue discountedPrice was decalred with "let" and it is being called outsdie its block scope.
7. 150 because it is printing the value of finalPrice, which is 150, and the line is in thje block scope of finalPrice
8. [50, 100, 150] because that's the value of discounted and the line is in the block scope of discounted.
9. Error becasue, line 11 is outside of the block scope of i (i is declared with let keyword)
10. 3, becasue the value of length is decalred as 3 and is never changed (as length was declared with const keyword if it is later changed an error will occur)
11.  [50, 100, 150], becasue the value of discounted is decalred as 3 and is never changed (as discounted was declared with const keyword if it is later changed an error will occur)
12. user.name, student['Grad Year'], student.greeting(), student['Favorite Teacher'].name, student.courseLoad[0]
13. 
a. 32 because integers map to exact string representation
b. 1 becasue in javascript minus sign only does subtracting between ints
c. 3 becasue null maps to integer 0
d. 3null because null maps to string "null"
e. 4 beacuse 1 maps to boolean 1
f. 0 because false and null map to 0
g. 3undefined becasue undefined maps to string 'undefined'
h. NaN, as undefined is not valid in numerical operations

14. 
a. true
b. false
c. true
d. false
e. false
f. true
15. == allows implicit type converstions, === doesnt allow implicit type converstions so both operands have to be of same type
17. [2,4,6], becasue in the for loop we are iterating thouhg each element and multiplyuing them by 2 (doSomething funciton does this)
19.  
1 <br>
4 <br>
3 <br>
2 <br>