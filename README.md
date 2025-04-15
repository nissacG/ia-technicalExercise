# Interactive Advisors Technical Exercise

This is my submission for the Interactive Advisors Technical Exercise.
The below is broken up in to two sections. Firstly my initial thoughts, reasoning and plan of attack. I will follow this up at near the end of my time with reflection, consideration and area of improvements. 

## Plan

The exercise description provides a few directives;
##### Framework
  Whilst there is a request to use Vue 2 or 3, I will use React, Vite and TypeScript.
  This is a conscious decision as it is where my experience lies. I feel I could learn and submit a solution using Vue, but given the time frame to build I did not want to compromise on quality on this occasion. I am however willing to learn and adapt in future.
  Last note on packages, I will use ShadcnUI for prebuilt components (specifically charts, more on this later) and TailwindCSS

##### Responsive
  Will leverage TailwindCSS for its handling of media queries and handle multiple breakpoints. In addition to breakpoints, Tailwind has a very simple and easy to use inline method for using classes to style and, in my opinion, great for building quickly.

##### Data
  Main task is to display the JSON data which includes a variety of data points. Most are straight forward strings to render, no conditional rendering etc. However the main piece of data that jumps out is the `chart` data. As previously mentioned, I will use ShadcnUI as it has an array of prebuilt components that can render responsive charts quickly. Why reinvent the wheel!
  I have noticed there are no ID's in each child, easily resolvable.


#### Design (Prebuild)
  - Grid layout, to display cards
  - Include breakpoints (**directive**)
  - Card itself to utilise Flex
  - String data to be listed
  - Chart to be below data on mobile, adjacent on tablet and above
  - Perhaps a modal for description and further data inspection. 
    - Consider what data is "important" or more valuable if real estate is tight

On to the build...

---


## Post Build
That was fun :) I appreciate the intent of bootstrapping an app and understanding the intent of how code is organised and implemented.
I approached the build similarly to the list above. Starting with the layout with breakpoints. Following that, the Cards component which would do 2 main task;
- Get the data
- Render a card for each bit of data returned from the request

In the hook, perhaps slight overkill with using fetch API but left it open incase a URL is required. I like to keep any data requesting and potential transformation separate from the rendering components. The components should then be as dumb as possible.

Returned from this hook, we have all data states and handling them, albeit in a very simple way for now. 
My first improvement would be here, to have better error and loading handling.
- Error handling to retry, perhaps contact support or navigate to a different page
- Loading could be improved with skeleton loaders to give the impression something is happening and giving user better feedback

The data itself is pretty straight forward. 
I made a decision to truncate the description as it was quite long. I mention in my prebuild I would look at a modal to give user more insight. I did not get around to this in the alloted time. So again another place to improve
It is very easy to list data points with key value pairs Eg. `Title: Foo`, `Subtitle: Bar` however I believe this detract from the UI/UX and can be resolved in other ways. My example in this instance is two fold. Firstly using styling - Bold for titles, smaller text for the rest, different color for links. Secondly using icons - Images can portray meaning quicker than works so with a calendar icon, makes it quicker and easier to reference.
Lastly we have the chart. When rendering the chart and axis', I thought the X axis was looking a bit silly with the long numbers. I soon realised they were Unix timestamps which made a lot more sense :D
Ensuring the chart data was visible led to slight changes to the grid layout but I think it is sufficient for now. Again, if more time, I would perhaps enhance the style of this chart and add legend etc in a more detailed view in a modal.

Lastly, we have testing. I have included some light touch test that cover, in my view, the main areas. Those being data, the card and the chart. As the app grows, along with complexity, then more test should be added as well as different kind of tests. Could add snapshot tests for dumb UI components (design system for example) to ensure no styles are changed by accident. Then also some E2E tests, from more of a business perspective to assert the desired outcome at a higher level.

---

Thank you for your time, I hope it can provide an insight to my ways of working.
I look forward to hearing your review. In the mean time, I will use this as an opportunity to learn Vue and use as a base :)

All the best.

---

# Available Scripts
In the project directory, you can run:

`npm run dev`

Runs the app in the development mode.
Open http://localhost:5173 to view it in the browser.

`npm run test`

Run tests in watch mode

`npm run test:ui`

Run tests with the Vitest UI

`npm run test:coverage`

Run tests with coverage reporting








 