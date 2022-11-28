import React from "react";
import { FaArrowAltCircleDown } from "react-icons/fa";

const Blog = () => {
  return (
    <div>
      <div className="collapse">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium flex items-center">
          <h2>
            What are the different ways to manage a state in a React
            application?
          </h2>
          <FaArrowAltCircleDown className="text-purple-600"></FaArrowAltCircleDown>
        </div>
        <div className="collapse-content">
          <p>
            <b>Local (UI)</b> state – Local state is data we manage in one or
            another component. Local state is most often managed in React using
            the useState hook. For example, local state would be needed to show
            or hide a modal component or to track values for a form component,
            such as form submission, when the form is disabled and the values of
            a form’s inputs.
          </p>
          <p>
            <b>Global (UI)</b> state – Global state is data we manage across
            multiple components. Global state is necessary when we want to get
            and update data anywhere in our app, or in multiple components at
            least. A common example of global state is authenticated user state.
            If a user is logged into our app, it is necessary to get and change
            their data throughout our application. Sometimes state we think
            should be local might become global.
          </p>
          <p>
            <b>Server state</b> – Data that comes from an external server that
            must be integrated with our UI state. Server state is a simple
            concept, but can be hard to manage alongside all of our local and
            global UI state. There are several pieces of state that must be
            managed every time you fetch or update data from an external server,
            including loading and error state. Fortunately there are tools such
            as SWR and React Query that make managing server state much easier.
          </p>
          <p>
            <b>URL state</b> – Data that exists on our URLs, including the
            pathname and query parameters. URL state is often missing as a
            category of state, but it is an important one. In many cases, a lot
            of major parts of our application rely upon accessing URL state. Try
            to imagine building a blog without being able to fetch a post based
            off of its slug or id that is located in the URL! There are
            undoubtedly more pieces of state that we could identify, but these
            are the major categories worth focusing on for most applications you
            build.
          </p>
        </div>
      </div>
      <div className="collapse">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium flex items-center">
          <h2>How does prototypical inheritance work?</h2>
          <FaArrowAltCircleDown className="text-purple-600"></FaArrowAltCircleDown>
        </div>
        <div className="collapse-content">
          <p>
            The core idea of Prototypal Inheritance is that an object can point
            to another object and inherit all its properties. The main purpose
            is to allow multiple instances of an object to share common
            properties, hence, the Singleton Pattern.
          </p>
          <p>
            In JavaScript, an object can inherit properties of another object.
            The object from where the properties are inherited is named
            prototype. An example, you can make pet a prototype of cat which
            will then inherit legs property.
          </p>
        </div>
      </div>
      <div className="collapse">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium flex items-center">
          <h2>What is a unit test? Why should we write unit tests?</h2>
          <FaArrowAltCircleDown className="text-purple-600"></FaArrowAltCircleDown>
        </div>
        <div className="collapse-content">
          <p>
            Unit testing is a software development process in which the smallest
            testable parts of an application, called units, are individually and
            independently scrutinized for proper operation. This testing
            methodology is done during the development process by the software
            developers and sometimes QA staff. The main objective of unit
            testing is to isolate written code to test and determine if it works
            as intended.
          </p>
          <p>
            Unit testing is an important step in the development process,
            because if done correctly, it can help detect early flaws in code
            which may be more difficult to find in later testing stages.
          </p>
          <p>
            Unit testing is a component of test-driven development (TDD), a
            pragmatic methodology that takes a meticulous approach to building a
            product by means of continual testing and revision. This testing
            method is also the first level of software testing, which is
            performed before other testing methods such as integration testing.
            Unit tests are typically isolated to ensure a unit does not rely on
            any external code or functions. Testing can be done manually but is
            often automated.
          </p>
          <hr />
          <p>
            <b>Advantages to unit testing</b>
          </p>
          <ul>
            <li>
              The earlier a problem is identified, the fewer compound errors
              occur.
            </li>
            <li>
              Costs of fixing a problem early can quickly outweigh the cost of
              fixing it later.
            </li>
            <li>Debugging processes are made easier.</li>
            <li>Developers can quickly make changes to the code base.</li>
            <li>
              Developers can also re-use code, migrating it to new projects.
            </li>
          </ul>
        </div>
      </div>
      <div className="collapse">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium flex items-center">
          <h2>React vs. Angular vs. Vue?</h2>
          <FaArrowAltCircleDown className="text-purple-600"></FaArrowAltCircleDown>
        </div>
        <div className="collapse-content">
          <h2 className="text-3xl ">Angular JS</h2>
          <p>
            With Angular’s MVC structure, it is possible to divide a page into
            logical chunks, resulting in a faster loading time of a web page. In
            addition to separating concerns, the MVC model also allows views to
            be allocated to the client and therefore drastically reduces the
            number of queries occurring on the background side. Also, the tool
            communicates asynchronously, which means fewer server calls are
            needed in order to communicate with it. Data-binding – Thanks to
            this amazing feature, developers no longer have to write long lines
            of code. By connecting the model and view components together, data
            is synchronized with the model. Templates – HTML data parsed
            directly into the DOM by the browser. Dependency Injection – It aids
            in natural development, analysis, and evaluation. Directives – By
            using this feature, you can create your own HTML tags that serve as
            the new custom widgets.
          </p>
          <hr />
          <h2 className="text-3xl">React JS</h2>
          <p>
            You can make web and mobile apps using React, a front-end library
            developed by Facebook. It is typically referred to as a library
            because, in an MVC architecture, the view layer is the only part of
            the system and not the whole thing. One of the advantages of React
            is that it is a very flexible framework and it is able to connect
            with several packages that have been designed for it, which makes it
            easier to put together a complete application. Components – React is
            a JavaScript framework that enables declarative and component-based
            development. In other words, UIs are created by breaking down web
            pages into smaller components. Components are a useful tool when you
            have to maintain your code while you are working on large projects.
            JSX – This javascript extension informs developers that the code
            needs to be processed and converted to javascript. By simplifying
            the syntax, JSX makes coding easier. You can use React with Angular
            and Backbone very easily. In contrast to other libraries and
            frameworks, React does not impose an architecture pattern.
            Components in React are essentially simple structuration units like
            labels and buttons or a bit complex like user profiles or
            registration forms. You can use it as a user interface for your web
            app.
          </p>
          <hr />
          <h2 className="text-3xl">Vue JS</h2>
          <p>
            In practice, it can be described as a progressive framework with a
            variety of features that can be used to build user interfaces, such
            as Virtual DOM, Two-way data binding, CSS transition and automation,
            template, computed properties, and many more important features.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
