export const instructions = {
  flexbox: [
    {
      title: "Challenge 1: ",
      text: `Center the boxes`
    },
    {
      title: "Challenge 2: ",
      text: `The great pyramid`
    },
    {
      title: "Challenge 3: ",
      text: `Divide and conquer`
    },
    {
      title: "Challenge 4: ",
      text: `Wall-to-Wall`
    },
    {
      title: "Challenge 5: ",
      text: `Zig-zag`
    },
    {
      title: "Final Challenge: ",
      text: `The Cell`
    }
  ],
  packingList: [
    {
      title: "Step 1",
      overview:
        "In this step we're going to introduce the TextInput component, and explore how to control its value as a controlled component.",
      objective:
        "Save `TextInput` value in local state each time it is updated, and then set the value of the `TextInput` to the value from that local state.  Read that local state in a `Text` below.",
      importantLinks: [
        {
          name: "TextInput Docs",
          url: "https://facebook.github.io/react-native/docs/textinput"
        }
      ],
      concepts: ["Store TextInput value in state", "Display TextInput's value below"]
    },
    {
      title: "Step 2",
      overview: `Now we move on to creating a list of things to pack and add them to a packing "list."`,
      objective:
        "Create a way to store a list of items and then be able to add a new item to that list. Bonus points: Use the return key to add an item to the list",
      importantLinks: [
        {
          name: "TextInput Docs",
          url: "https://facebook.github.io/react-native/docs/textinput"
        },
        {
          name: "Handling Text Input",
          url: "https://facebook.github.io/react-native/docs/handling-text-input"
        },
        {
          name: "TouchableOpacity",
          url: "https://facebook.github.io/react-native/docs/touchableopacity"
        }
      ],
      concepts: [
        `Introduce "items" array into local state`,
        "Able to push a new item into the items array with setState",
        "Use return key to add item to list"
      ]
    },
    {
      title: "Step 3",
      overview: `"Componentize" some components so they can be used throught our app, and add some polish to our UX.`,
      objective:
        "Create a generic, reusable `Button` component and use it in a custom `ListInput` component - which will be used in the App. Also be able to clear the `inputValue` and the `items` from the list.",
      importantLinks: [
        {
          name: "TextInput Docs",
          url: "https://facebook.github.io/react-native/docs/textinput"
        },
        {
          name: "props",
          url: "https://facebook.github.io/react-native/docs/props"
        }
      ],
      concepts: [
        "Create functional Button component",
        "Create functional ListInput component",
        "Clear inputValue & items"
      ]
    }
  ]
}
