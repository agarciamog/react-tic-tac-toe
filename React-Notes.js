// React.js Notes

/*
  Three Design Concepts
    Components - Describe UI with components. Like functions and reusable.
                  Can have private state.
    Reactive updates - When the state of components/UI changes, the output
                  changes too, meaning DOM updates automatically, i.e.
                  React reacts to changes.
    Virtual views in memory - Write HTML in JavaScript, whereas frameworks
                  like Angular enhance HTML (looks, conditionals). Keeps
                  2 DOMs in memory, current and new DOM. It makes updates
                  by reconciling the changes in the trees.

  Components
    2 Types
            Function - Simplest form af a React component. Recieves
                        properties/props and returns something called JSX.
                        It looks like HTML, but it's not.
               Class - More feature complete form of creating a React
                       component. Also accepts properties, but has
                       a private state. It also returns JSX. State can
                       change, but properties/props are fixed.
                       Note: JSX stands for JavaScript serialization XML.
                              You can use React without JSX, but JSX makes
                              it alot easier and more elegant.

/*
