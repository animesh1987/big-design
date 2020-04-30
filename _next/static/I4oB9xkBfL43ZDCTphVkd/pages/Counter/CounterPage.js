(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{M0Fq:function(e,n,t){"use strict";t.r(n);var r=t("d2TB"),a=t("ERkP"),o=t.n(a),l=t("GsAr"),u=t("lIm4"),i=t("cxan"),s=t("nFRM"),c=o.a.createElement,m=[{name:"label",types:["string","FormControlLabel"],description:c(o.a.Fragment,null,"Label element for counters. Component with auto generate ",c(u.a,null,"id"),"'s for the accessibility API.")},{name:"labelId",types:"string",description:c(o.a.Fragment,null,"Appends an ",c(u.a,null,"id")," to the generated label element.")},{name:"description",types:["string","FormControlDescription"],description:"Append a description to the input field."},{name:"error",types:["string","string[]","FormControlError","FormControlError[]"],description:c(o.a.Fragment,null,"Displays an error message for the field. Error message will be passed to the ",c(u.a,null,"FormGroup")," for display purposes.")},{name:"value",types:"number",required:!0,description:c(o.a.Fragment,null,"Value for the ",c(u.a,null,"Counter"),". Only accepts whole numbers.")},{name:"min",types:"number",defaultValue:0,description:c(o.a.Fragment,null,"The minimum ",c(u.a,null,"value")," allowed.")},{name:"max",types:"number",defaultValue:100,description:c(o.a.Fragment,null,"The maximum ",c(u.a,null,"value")," allowed.")},{name:"step",types:"number",defaultValue:1,description:c(o.a.Fragment,null,"The amount beetween one ",c(u.a,null,"value")," and the next when incrementing or decrementing the"," ",c(u.a,null,"Counter"),".")},{name:"onCountChange",types:"(count: number) => void",description:"Function to be called that changes counter value. Receives the new count from the component.",required:!0}],d=function(e){return c(s.a,Object(i.a)({title:"Counter",propList:m},e))},p=o.a.createElement;n.default=function(){return p(o.a.Fragment,null,p(r.H0,null,"Counter"),p(r.Text,null,"Counters are stylized numerical form controls with the ability to control validation."," ",p(r.Link,{href:"https://design.bigcommerce.com/components/text-field",target:"_blank"},"Text Field Design Guidelines"),"."),p(l.a,null,'function Example() {\n  const [counterValue, setCounterValue] = useState(5);\n  const handleChange = (value: number) => {\n    setCounterValue(value);\n  };\n\n  return (\n    <Form>\n      <FormGroup>\n        <Counter\n          label="Label"\n          description="Description for the counter."\n          value={counterValue}\n          min={0}\n          max={10}\n          onCountChange={handleChange}\n        />\n      </FormGroup>\n    </Form>\n  );\n}'),p(r.H1,null,"API"),p(r.Text,null,"Supports most native ",p(u.a,null,"<input />")," element attributes."),p(d,null),p(r.H1,null,"Error State"),p(r.Text,null,"Counters allow you to pass in an ",p(u.a,{primary:!0},"error")," message that will control the styles of a counter. The logic on the counter can be controlled with the ",p(u.a,{primary:!0},"onCountChange")," prop."),p(l.a,null,"function Example() {\n  const [counterValue, setCounterValue] = useState(0);\n  const [errors, setErrors] = useState('Number of items must be at least 1.');\n  const handleChange = (value: number) => {\n    setCounterValue(value);\n\n    if (value >= 1) {\n      setErrors('');\n    } else {\n      setErrors('Number of items must be at least 1.');\n    }\n  };\n\n  return (\n    <Form>\n      <FormGroup>\n        <Counter\n          label=\"Products\"\n          required\n          description=\"Select at least one item.\"\n          error={errors}\n          onCountChange={handleChange}\n          value={counterValue}\n        />\n      </FormGroup>\n    </Form>\n  );\n}"))}},c2K2:function(e,n,t){"use strict";t.d(n,"a",(function(){return m}));var r=t("d2TB"),a=t("XPf/"),o=t("BtTX"),l=t("ERkP"),u=t.n(l),i=t("j/s1"),s=Object(i.e)(r.Flex).withConfig({displayName:"styled__StyledFlex",componentId:"sc-14v4ikn-0"})(["cursor:pointer;display:inline-flex;flex-direction:row;"]),c=u.a.createElement,m=function(e){var n=e.children,t=e.title,u=Object(l.useState)(!0),i=u[0],m=u[1],d=function(){return m(!i)};return c("div",null,c(s,{marginBottom:"xLarge",alignItems:"center",onClick:d,onKeyPress:function(e){"Enter"!==e.key&&" "!==e.key||d()},tabIndex:0},i?c(a.a,{title:"Expand"}):c(o.a,{title:"Collapse"}),c(r.Text,null,t)),!i&&n)}},lIm4:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var r=t("ERkP"),a=t.n(r),o=t("j/s1"),l=o.e.code.withConfig({displayName:"styled__StyledCode",componentId:"sc-1xz1scc-0"})(["color:",";",";",";"],(function(e){return e.theme.colors.secondary70}),(function(e){var n=e.highlight,t=e.primary,r=e.theme;return n&&!t&&Object(o.d)(["background-color:",";padding:",";"],r.colors.warning10,r.spacing.xxSmall)}),(function(e){var n=e.primary,t=e.theme;return n&&Object(o.d)(["color:",";"],t.colors.primary70)})),u=a.a.createElement,i=function(e){return u(l,e)};i.defaultProps={highlight:!0}},nFRM:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var r=t("d2TB"),a=t("ERkP"),o=t.n(a),l=t("lIm4"),u=t("c2K2"),i=o.a.createElement,s=function(e){var n=e.collapsible,t=e.id,a=e.propList,s=e.title,m=function(){return i(r.TableFigure,{marginBottom:"xLarge"},i(r.Table,{columns:[{header:"Prop Name",hash:"propName",render:function(e){var n=e.name,t=e.required;return i(o.a.Fragment,null,i(l.a,{primary:!0},n),t?i("b",null," *"):null)}},{header:"Type",hash:"type",render:function(e){var n=e.types;return i(c,{types:n})}},{header:"Default",hash:"default",render:function(e){var n=e.defaultValue;return i(l.a,{highlight:!1},n)}},{header:"Description",hash:"description",width:"50%",render:function(e){var n=e.description;return i(r.Text,null,n)}}],items:a}),i(r.Small,{marginTop:"xSmall"},"Props ending with * are required"))};return n?i(u.a,{title:"".concat(s," Props")},m()):i(o.a.Fragment,null,i(r.H2,{id:t},s),m())},c=function(e){var n=e.types;return Array.isArray(n)?n.map((function(e,t){return i(o.a.Fragment,{key:e},e.type===r.Link?i(l.a,{highlight:!1},e):i(l.a,null,e),t<n.length-1?" | ":null)})):n.type===r.Link?i(l.a,{highlight:!1},n):i(l.a,null,n)}},"q/6U":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Counter/CounterPage",function(){return t("M0Fq")}])}},[["q/6U",1,2,4,6,7,9,0,3,5,8]]]);