## Chain Of responsibility - 

### Description -
1. The problem statement is that we have a hierarchy of some items(i1,i2,i3,i4 etc.), and we need to give something to the lowest item(say i1) in hierarchy to handle a problem(p1), if p1 is not handled by i1, then system should automatically pass it the next item in hierrrachy and so on until its handled properly.

2. To do this, we first have to write a code taht will create hierarchy among items and then test it by giving the problem to the lowest.

3. We can craete an abstract class plan called chainPlan that will have a method (m1) that will set the hierarchy by taking an instance of the item.

4. All the items will extend this plan and will have the m1 available.

5. Then, we will craete instance of all the items and use the m1 to set the hierarchy for each item.

6. the we can give the p1 to the i1 to handle


### Problem statement -
- There are new viruses being discovered in the system whose severity level can be set ; now there is a debugger chain hierecahy; if an engineer can solve it then it's fine; otherwise he will pass it to team lead; if team lead can't solve it then he will pass it to technical officer;if he can't then he will pass it to the Expert where its solved finally. So a chain abstract class is created and all the debuggers will extend from it amd create a chain