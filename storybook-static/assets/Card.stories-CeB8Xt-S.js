import{j as e}from"./jsx-runtime-CIcK3ykT.js";import{C as t,e as f,f as d,g as x,h as g,i as j}from"./Select-CAKwlYcd.js";import"./iframe-B_o2QTOT.js";import"./preload-helper-D6kgxu3v.js";const I={title:"Components/Card",component:t,parameters:{layout:"centered"}},r={render:o=>e.jsxs(t,{...o,children:[e.jsx(f,{src:"https://placehold.co/600x400",href:"https://placehold.co/600x400",alt:"placeholder image"}),e.jsxs(d,{children:[e.jsx(x,{children:"CardHeader"}),e.jsx(g,{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius necessitatibus illo earum aliquam harum, doloribus sit expedita magnam vero non sequi labore beatae. Sit, ut. Neque minus dolorum perspiciatis ipsa?"}),e.jsx(j,{href:"#"})]})]})},a={render:o=>e.jsx(t,{...o,children:e.jsxs(d,{children:[e.jsx(x,{children:"No Image"}),e.jsx(g,{children:"This card skips the preview image entirely."}),e.jsx(j,{href:"#"})]})})},s={render:()=>e.jsx(t,{children:e.jsx(d,{children:"Just some text, no flair."})})};var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => <Card {...args}>
      <CardImage src='https://placehold.co/600x400' href='https://placehold.co/600x400' alt='placeholder image' />
      <CardContent>
        <CardHeader>CardHeader</CardHeader>
        <CardBody>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
          necessitatibus illo earum aliquam harum, doloribus sit expedita magnam
          vero non sequi labore beatae. Sit, ut. Neque minus dolorum
          perspiciatis ipsa?
        </CardBody>
        <CardCTA href='#' />
      </CardContent>
    </Card>
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var c,l,C;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <Card {...args}>
      <CardContent>
        <CardHeader>No Image</CardHeader>
        <CardBody>This card skips the preview image entirely.</CardBody>
        <CardCTA href='#' />
      </CardContent>
    </Card>
}`,...(C=(l=a.parameters)==null?void 0:l.docs)==null?void 0:C.source}}};var p,u,h;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Card>
      <CardContent>Just some text, no flair.</CardContent>
    </Card>
}`,...(h=(u=s.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};const B=["CardComponent","CardWithoutImage","MinimalCard"];export{r as CardComponent,a as CardWithoutImage,s as MinimalCard,B as __namedExportsOrder,I as default};
