/*
 * script to create and populate the flight table
 * 
 */

print("STARTING SCRIPT");
conn = new Mongo("localhost");
db = conn.getDB("testFlight");

flights1 = {
  
"_id" : "0",
"name" : "flights1"

}

flights2 = {
  
"_id" : "1",
"name" : "flights2"

}

flights3 = {
  
"_id" : "2",
"name" : "flights3"

}

flights4 = {
  
"_id" : "3",
"name" : "flights4"

}

flights5 = {
  
"_id" : "4",
"name" : "flights5"

}



db.flights.save(flights1);
db.flights.save(flights2);
db.flights.save(flights3);
db.flights.save(flights4);
db.flights.save(flights5);


print("SCRIPT FINISHED");


