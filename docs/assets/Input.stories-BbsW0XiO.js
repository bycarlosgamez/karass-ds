import{j as E}from"./jsx-runtime-D0ypetOs.js";import{I as q}from"./Select-fTMJd5uS.js";import"./iframe-CuTnsByq.js";import"./preload-helper-D6kgxu3v.js";const j={title:"Components/Input",component:q,args:{label:"Input",placeholder:"Enter text",disabled:!1,required:!1},argTypes:{label:{name:"Label",control:"text",description:"Label of the input",table:{type:{summary:"string"},defaultValue:{summary:"Input"}}},placeholder:{name:"Placeholder",control:"text",description:"Placeholder text of the input",table:{type:{summary:"string"},defaultValue:{summary:"Enter text"}}},disabled:{name:"Disabled",control:"boolean",description:"Disables the input field",table:{type:{summary:"boolean"}}},required:{name:"Required",control:"boolean",description:"Marks the input as required",table:{type:{summary:"boolean"}}},error:{name:"Error",control:"text",description:"Displays validation message and red ring-3 styling",table:{type:{summary:"string"}}}}},e={},r={args:{disabled:!0}},a={args:{required:!0,label:"Required Input"}},t={render:I=>E.jsx(q,{...I,value:"email@email.com"}),args:{label:"Prefilled Input",placeholder:"Enter text"}},s={args:{label:"Input with error",error:"This field is required",placeholder:"Enter text"}};var o,l,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:"{}",...(n=(l=e.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};var i,d,u;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var p,c,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    required: true,
    label: 'Required Input'
  }
}`,...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var b,g,f;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <Input {...args} value='email@email.com' />,
  args: {
    label: 'Prefilled Input',
    placeholder: 'Enter text'
  }
}`,...(f=(g=t.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var h,x,y;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'Input with error',
    error: 'This field is required',
    placeholder: 'Enter text'
  }
}`,...(y=(x=s.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const v=["Default","Disabled","Required","Prefilled","ErrorState"];export{e as Default,r as Disabled,s as ErrorState,t as Prefilled,a as Required,v as __namedExportsOrder,j as default};
