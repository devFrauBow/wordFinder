So, i'm using finder to acess objects trough an array since i'm playing with a chat bot.

Example object:
People = {
  "Jason":{ 
    "name":"Jason", 
    "bananas":20, 
    "gold": 0
    },
   "Jackson":{
   "name":"Jackson",
   "bananas":0,
   "gold":0}
   }      

Example array: PeopleArray = [Jason has 20 bananas and 0 gold, Jackson has 0 bananas and 20 gold]

since i'm logging the array for the users the users choose options will be: 
[0] - Jason has 20 bananas and 0 gold 
or 
[1] Jackson has 0 bananas and 20 gold
I recive the number to acess the array

Imagine the user chooses 0 
choose = 0

now we use the finder to acess the object in order to change data in the database

for(key in People){
  let result = finder(key, PeopleArray[choose])
  if(result == true){
    People[key][gold] = 20
    //do something with it
  }
}
