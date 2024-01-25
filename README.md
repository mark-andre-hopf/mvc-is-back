# Model-View-Controller (MVC) is back!

## MVC In A Nutshell

1.  Forget everything you have heard about MVC so far.  It is probably
wrong.

2.  MVC means separating application state and behaviour from a _View_ and
   moving it into a _Model_.  (The Model can be further separated into an
   application specific model and a domain specific model.  E.g.  the
   application model would decide that negative numbers should be rendered
   using a red color.)

3.  The View provides a visual representation of the model.  When the user
   interacts with the View, the View changes the Model.

4.  When the Model changes, the View is automatically updated.

## What MVC Is Not 

1.  Forget about the Controller.  It's created by and hence part of the
  View.  Having it separate from the View was an artifact of the SmallTalk
  system.  [Reenskaug: MVC, Xerox PARC
  1978-79](https://folk.universitetetioslo.no/trygver/themes/mvc/mvc-index.html)

2.  MVC in web frameworks like Spring Boot, Ruby on Rails, etc.  is NOT MVC,
  it's [JSP model
  2](https://en.wikipedia.org/wiki/JSP_model_2_architecture).

3.  Third: A Model is not data, It is a
  '[model](https://en.wikipedia.org/wiki/Model)', a simplified
  representation of something else.  It has data (variables) AND behaviour
  (code).

4.  There is no recursion in MVC.

    * User interacts with View
    * View changes Model
    * Model reports change to View
    * View displays the Model's new state

    And then it stops.

    That said, there can be recursion between models, e.g.  in a color
    dialog, when then RGB values depend on the HSV values and vice versa and
    then it never stops because of floating point errors.

5.  MVC doesn't make creating UIs harder.  It makes it easier.  A good MVC
   library usually consists of a large collection of re-usable Views (e.g. 
   button, slider or table) and Application Models (e.g.  number, text,
   list, table or quantity for weight, lengths, currencies, ...) and tooling
   which allows Users, UX and Developers to pair and prototype the
   application together whilst pairing.

## History

 MVC is the reactivity pattern used in SmallTalk.

 If you do not know Smalltalk, Smalltalk was intended to a create a
programming environment in which average users would be enabled to modify
existing applications to their own needs or even create new ones.
[Kay and Goldberg: Personal Dynamic Media, 1977](https://augmentingcognition.com/assets/Kay1977.pdf).

 Not just a 'Personal Computer', a computer for a single person, but 'Personal Computing',
a means were a single person can define it's own computations.

 So far that vision never became true as it was, and in some aspects still is,
too far ahead of it's time.  It would take the free software/open source
movements to get the code into the users hands as well as making the required
hardware afordable to the mainstream.

 Instead, around 1995, the SmallTalk community was killed by the hype around
C++ and finally Java and the Internet.  

 The SmallTalk implementations available today also haven't aged well. Aside from
Squeak, they are all stuck in the 80ties. And Squeak is too much focused on education
and children to a tool for professional applications.

 SmallTalk's take on Object Orientated Programming as a means to [Extensible
Programming](https://en.wikipedia.org/wiki/Extensible_programming) also didn't survive.

 While it's the idea which led to Clean Code and Domain Driven Design, most
of today's application of OOP constructs, especially in the Java community,
is just procedural programming disguised by the [Anemic Domain Model
Anti-Pattern](https://en.wikipedia.org/wiki/Anemic_domain_model) which
basically sets the whole industry back sixty years to COBOL60.

 Still, some things have survived.

 The Just-In-Time compilers powering today's Java/JavaScript applications
actually originated in the SmallTalk community (E.g.  StrongTalk's JIT
became Java's HotSpot.)

 And when Ward Cunningham and Kent Beck, then at Tektronik, got involved in
Xerox PARC's SmallTalk and it's approach of involving the end user in the
direct, interactive creation of software, it also led to Pair Programming
and Cross-Functional Teams, TDD and xUnit Testing and finally Agile.

 The last take on MVC by the creators of Smalltalk, was split to the Model into an
Application and Domain model.  [Simon Lewis: The Art and Science of
Smalltalk,
1995](https://rmod-files.lille.inria.fr/FreeBooks/Art/artAdded174186187Final.pdf),
(The Application model is also known as
[Presenter](https://www.oreilly.com/library/view/clean-architecture-a/9780134494272/ch23.xhtml)
(Presentation Model)[https://martinfowler.com/eaaDev/PresentationModel.html]
or (View Model)[https://en.wikipedia.org/wiki/Model–view–viewmodel])

 After that, meaning got lost and resurfaced under different names again and
again, e.g.  Model-View-Presenter (MVP), Model-View-ViewModel (MVVM), React
Flux (View=View, Store=Model, Action=Message from View to Model to change)
or SolidJS/Preact Signals.

## Signals

 So via the evolutionary line of

MVC
➞ MVVM 
➞ [Knockout.JS Observable](https://knockoutjs.com/documentation/observables.html)
➞ [SolidJS Signal](https://www.solidjs.com/tutorial/introduction_signals)
➞ [@preact/signals](https://www.npmjs.com/package/@preact/signals)
➞ [@preact/signals-react](https://www.npmjs.com/package/@preact/signals-react)
 
the MVC pattern seems to be back in fashion again.

And here is what it looks like [App.tsx](./src/App.tsx)
