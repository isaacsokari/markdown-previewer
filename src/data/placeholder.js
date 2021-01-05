/* eslint-disable no-useless-escape */
const placeholderText = `
# This is the Main Heading! - \\#

## This is a sub-heading - Heading 2... \\#\\#

We also have -

### Heading 3 \\#\\#\\#

#### Heading 4 \\#\\#\\#\\#

##### Heading 5 \\#\\#\\#\\#\\#

###### Heading 6 \\#\\#\\#\\#\\#\\#

####### But no Heading 7 :\(\


We can have inline code, \`const foo = 'bar'\` (wrapped with single backticks)

\`\`\`
// and also multi-line code wrapped with triple backticks "\`\`\`\":

function sayHello(firstName ="John",\ lastName = "Doe") {
      return \`Hello $\{firstName\} $\{lastName\}, how are you?\`
}

sayHello()
\`\`\`

You can also make text **bold** or _italic_.
Or even **_both!_**
~~You can even cross stuff out~~.

We also have [links](https://www.freecodecamp.com), and
> Block Quotes!


- We even get lists
- Some are bulleted.
  - With different indentation levels.
    - That look like this.


Last but definitely not least, here's a photo (Yes! We have those too).


![Here's My Codepen photo](https://res.cloudinary.com/ts-i/image/upload/v1590189857/startng%20files/books-pencils-apple_jcdxzq.jpg)
`;

export default placeholderText;