Builder - 

### Description -
1. Some objects are simple to create but some needs a whole lot of process and steps to do so. To do this. we opt for piecewise craetion of objects.
2. Builder provides an API for constructing an object step by step. It works on the main Object class that has all the information it needs to be craeted. 
3. Sometimes we also have many sub-builders for complicated process of subparts of an object. In our example, we can have separate builders like engineBuilder, electronicsBuilder and carBodyBuilder. Important thisng to keep in mind that all the subbuilders should work on the same object.


Problem statement -
# We have 3 types of cars that we want to build (sports, sedan and luxury). And, they have to built in 3 steps engineCreate, carBodyCreate and ElectronicsCreate. We have an engineer that is going to create the cars.