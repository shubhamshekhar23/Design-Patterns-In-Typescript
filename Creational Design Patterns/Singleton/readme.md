Singleton - 

### Description -
1.  we need to have only one instance of our class for example a single DB connection shared by multiple objects as creating a separate DB connection for every object may be costly. Similarly, there can be a single configuration manager or error manager in an application that handles all problems instead of creating multiple managers.

2. This pattern involves a single class which is responsible to create an object while making sure that only single object gets created.
We can decode to create an instance already in the singleton class OR we can let the user use create Functiona s manytimes as he wants, but it will always return the same object.

3. we make constructor private, so that client can instantiate it. We expose one method to get the instance.

4. Its also used, when constructing an object is a heavy task.


Problem statement -
# Our Car Factory only should have one headQuarter. Create a headquarter class that will create only a single instance no matter how many times we instantiate it.