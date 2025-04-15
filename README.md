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


### Design (Prebuild)
  - Grid layout, to display cards
  - Include breakpoints (**directive**)
  - Card itself to utilise Flex
  - String data to be listed
  - Chart to be below data on mobile, adjacent on tablet and above
  - Perhaps a modal for description and further data inspection. 
    - Consider what data is "important" or more valuable if real estate is tight

On to the build...





 