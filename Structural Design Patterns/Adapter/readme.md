Adapter - 

### Description -

1.  adapters are used when we have a class (Client) expecting some type of object and we have an object (Adaptee) offering the same features but exposing a different interface.

2. To use an adapter:
The client makes a request to the adapter by calling a method on it using the target interface.
The adapter translates that request on the adaptee using the adaptee interface.
Client receive the results of the call and is unaware of adapter’s presence.

3. The adapter pattern convert the interface of a class into another interface clients expect. Adapter lets classes work together that couldn’t otherwise because of incompatible interfaces.The client sees only the target interface and not the adapter. The adapter implements the target interface. Adapter delegates all requests to Adaptee.

4. Here in our example , client is our Car that can only work with petrol interface, so we create an adapter petrolsystemadapter and our 
adaptee is Gassystem that is being used in adapter that client is complete unaware of.


Problem statement -
# We had initially created our class Car supporting only petrolSystem. So, Car class can only setSystem for petrolSystem Interface. Now, we want to 
support GasSystem also that has a different interface.
