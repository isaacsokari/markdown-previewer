(this["webpackJsonpmarkdown-previewer"]=this["webpackJsonpmarkdown-previewer"]||[]).push([[0],{12:function(e,n,t){},13:function(e,n,t){},14:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t(1),r=t.n(i),o=t(5),s=t.n(o),c=(t(12),t(4)),d=t(6),l=function(e){var n=e.markdownText,t=e.setMarkdownText;return Object(a.jsxs)("div",{className:"editor-container",children:[Object(a.jsx)("h3",{children:"Editor"}),Object(a.jsx)("textarea",{className:"editor",id:"editor",onChange:function(e){t(e.target.value)},value:n})]})},h=t(3),u=t.n(h),j=new u.a.Renderer;j.link=function(e,n,t){return'<a target="_blank" href="'.concat(e,'">').concat(t,"</a>")};var b=function(e){var n=e.markdownText;return Object(a.jsxs)("div",{className:"preview-container",children:[Object(a.jsx)("h3",{children:"Preview"}),Object(a.jsx)("div",{className:"preview",id:"preview",dangerouslySetInnerHTML:{__html:u()(n,{renderer:j})}})]})},m=(t(13),function(){var e=r.a.useState('\n# This is the Main Heading! - \\#\n\n## This is a sub-heading - Heading 2... \\#\\#\n\nWe also have -\n\n### Heading 3 \\#\\#\\#\n\n#### Heading 4 \\#\\#\\#\\#\n\n##### Heading 5 \\#\\#\\#\\#\\#\n\n###### Heading 6 \\#\\#\\#\\#\\#\\#\n\n####### But no Heading 7 :(\n\nWe can have inline code, `const foo = \'bar\'` (wrapped with single backticks)\n\n```\n// and also multi-line code wrapped with triple backticks "```":\n\nfunction sayHello(firstName ="John", lastName = "Doe") {\n      return `Hello ${firstName} ${lastName}, how are you?`\n}\n\nsayHello()\n```\n\nYou can also make text **bold** or _italic_.\nOr even **_both!_**\n~~You can even cross stuff out~~.\n\nWe also have [links](https://www.freecodecamp.com), and\n> Block Quotes!\n\n\n- We even get lists\n- Some are bulleted.\n  - With different indentation levels.\n    - That look like this.\n\n\nLast but definitely not least, here\'s a photo (Yes! We have those too).\n\n\n![Here\'s My Codepen photo](https://res.cloudinary.com/ts-i/image/upload/v1590189857/startng%20files/books-pencils-apple_jcdxzq.jpg)\n'),n=Object(d.a)(e,2),t=n[0],i=n[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{children:"MarkDown Previewer"}),Object(a.jsxs)("div",{className:"main",children:[Object(a.jsx)(l,Object(c.a)({},{markdownText:t,setMarkdownText:i})),Object(a.jsx)(b,Object(c.a)({},{markdownText:t}))]})]})});s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(m,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.ad5fd4ad.chunk.js.map