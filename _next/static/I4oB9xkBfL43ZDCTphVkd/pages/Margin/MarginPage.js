(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{KeDb:function(e,n,t){"use strict";var r=t("zQIG"),a=t("8mBC"),i=t("cMav"),o=t("pSQP"),s=t("I/kN"),l=t("Y3ZS"),c=t("pONU");n.__esModule=!0,n.default=void 0;var u,p=c(t("ERkP")),f=t("cRaD"),h=t("fvxO"),g=l(t("7xIC"));function m(e){return e&&"object"===typeof e?(0,h.formatWithValidation)(e):e}var d=new Map,v=window.IntersectionObserver,y={};function b(){return u||(v?u=new v((function(e){e.forEach((function(e){if(d.has(e.target)){var n=d.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(e.target),d.delete(e.target),n())}}))}),{rootMargin:"200px"}):void 0)}var k=function(e){function n(e){var t;return r(this,n),(t=i(this,o(n).call(this,e))).p=void 0,t.cleanUpListeners=function(){},t.formatUrls=function(e){var n=null,t=null,r=null;return function(a,i){if(r&&a===n&&i===t)return r;var o=e(a,i);return n=a,t=i,r=o,o}}((function(e,n){return{href:m(e),as:n?m(n):n}})),t.linkClicked=function(e){var n=e.currentTarget,r=n.nodeName,a=n.target;if("A"!==r||!(a&&"_self"!==a||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var i=t.formatUrls(t.props.href,t.props.as),o=i.href,s=i.as;if(function(e){var n=(0,f.parse)(e,!1,!0),t=(0,f.parse)((0,h.getLocationOrigin)(),!1,!0);return!n.host||n.protocol===t.protocol&&n.host===t.host}(o)){var l=window.location.pathname;o=(0,f.resolve)(l,o),s=s?(0,f.resolve)(l,s):o,e.preventDefault();var c=t.props.scroll;null==c&&(c=s.indexOf("#")<0),g.default[t.props.replace?"replace":"push"](o,s,{shallow:t.props.shallow}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())}))}}},t.p=!1!==e.prefetch,t}return s(n,e),a(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,n=this.formatUrls(this.props.href,this.props.as),t=n.href,r=n.as,a=(0,f.resolve)(e,t);return[a,r?(0,f.resolve)(e,r):a]}},{key:"handleRef",value:function(e){var n=this;this.p&&v&&e&&e.tagName&&(this.cleanUpListeners(),y[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,n){var t=b();return t?(t.observe(e),d.set(e,n),function(){try{t.unobserve(e)}catch(n){console.error(n)}d.delete(e)}):function(){}}(e,(function(){n.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var n=this.getPaths();g.default.prefetch(n[0],n[1],e).catch((function(e){0})),y[n.join("%")]=!0}}},{key:"render",value:function(){var e=this,n=this.props.children,t=this.formatUrls(this.props.href,this.props.as),r=t.href,a=t.as;"string"===typeof n&&(n=p.default.createElement("a",null,n));var i=p.Children.only(n),o={ref:function(n){e.handleRef(n),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(n):"object"===typeof i.ref&&(i.ref.current=n))},onMouseEnter:function(n){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(n),e.prefetch({priority:!0})},onClick:function(n){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(n),n.defaultPrevented||e.linkClicked(n)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(o.href=a||r),p.default.cloneElement(i,o)}}]),n}(p.Component);n.default=k},Nz7V:function(e,n,t){"use strict";t.r(n);var r=t("d2TB"),a=t("ERkP"),i=t.n(a),o=t("R5dR"),s=t("GsAr"),l=t("akZe"),c=i.a.createElement;n.default=function(){return c(i.a.Fragment,null,c(r.H0,null,"Margin"),c(r.Text,null,"Some of our components expose a simple way to modify their margin. The following example showcases the simples way to use the margin prop by giving it a"," ",c(o.a,{href:"/Spacing/SpacingPage",as:"/spacing"},"Spacing")," ","value."),c(s.a,null,'<Button margin="medium">Example</Button>'),c(r.Text,null,"You can also specify margins with an object to handle different margins with different"," ",c(o.a,{href:"/Breakpoint/BreakpointPage",as:"/breakpoints"},"breakpoints"),". All values must be of"," ",c(o.a,{href:"/Spacing/SpacingPage",as:"/spacing"},"Spacing")," ","type."),c(s.a,null,"<Button margin={{ mobile: 'none', tablet: 'medium', desktop: 'xLarge' }}>Example</Button>"),c(r.H1,null,"API"),c(l.a,null))}},R5dR:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var r=t("d2TB"),a=t("jvFD"),i=t.n(a),o=t("ERkP"),s=t.n(o).a.createElement;function l(){return"/big-design"+(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"")}var c=function(e){var n=e.as,t=e.children,a=e.href;return s(i.a,{href:a,as:l(n)},"string"===typeof t?s(r.Link,{href:u(a)?a:""},t):t)};function u(e){return e&&"#"===e.charAt(0)}},akZe:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var r=t("cxan"),a=t("ERkP"),i=t.n(a),o=t("R5dR"),s=t("nFRM"),l=i.a.createElement,c=[{name:"margin",types:l(o.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the margin to be applied."},{name:"marginTop",types:l(o.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the top margin to be applied."},{name:"marginRight",types:l(o.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the right margin to be applied."},{name:"marginBottom",types:l(o.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the bottom margin to be applied."},{name:"marginLeft",types:l(o.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the left margin to be applied."},{name:"marginVertical",types:l(o.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the top and bottom margin to be applied."},{name:"marginHorizontal",types:l(o.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the left and right margin to be applied."}],u=function(e){return l(s.a,Object(r.a)({title:"Margin",propList:c},e))}},c2K2:function(e,n,t){"use strict";t.d(n,"a",(function(){return p}));var r=t("d2TB"),a=t("XPf/"),i=t("BtTX"),o=t("ERkP"),s=t.n(o),l=t("j/s1"),c=Object(l.e)(r.Flex).withConfig({displayName:"styled__StyledFlex",componentId:"sc-14v4ikn-0"})(["cursor:pointer;display:inline-flex;flex-direction:row;"]),u=s.a.createElement,p=function(e){var n=e.children,t=e.title,s=Object(o.useState)(!0),l=s[0],p=s[1],f=function(){return p(!l)};return u("div",null,u(c,{marginBottom:"xLarge",alignItems:"center",onClick:f,onKeyPress:function(e){"Enter"!==e.key&&" "!==e.key||f()},tabIndex:0},l?u(a.a,{title:"Expand"}):u(i.a,{title:"Collapse"}),u(r.Text,null,t)),!l&&n)}},jvFD:function(e,n,t){e.exports=t("KeDb")},lIm4:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var r=t("ERkP"),a=t.n(r),i=t("j/s1"),o=i.e.code.withConfig({displayName:"styled__StyledCode",componentId:"sc-1xz1scc-0"})(["color:",";",";",";"],(function(e){return e.theme.colors.secondary70}),(function(e){var n=e.highlight,t=e.primary,r=e.theme;return n&&!t&&Object(i.d)(["background-color:",";padding:",";"],r.colors.warning10,r.spacing.xxSmall)}),(function(e){var n=e.primary,t=e.theme;return n&&Object(i.d)(["color:",";"],t.colors.primary70)})),s=a.a.createElement,l=function(e){return s(o,e)};l.defaultProps={highlight:!0}},mBEy:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Margin/MarginPage",function(){return t("Nz7V")}])},nFRM:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var r=t("d2TB"),a=t("ERkP"),i=t.n(a),o=t("lIm4"),s=t("c2K2"),l=i.a.createElement,c=function(e){var n=e.collapsible,t=e.id,a=e.propList,c=e.title,p=function(){return l(r.TableFigure,{marginBottom:"xLarge"},l(r.Table,{columns:[{header:"Prop Name",hash:"propName",render:function(e){var n=e.name,t=e.required;return l(i.a.Fragment,null,l(o.a,{primary:!0},n),t?l("b",null," *"):null)}},{header:"Type",hash:"type",render:function(e){var n=e.types;return l(u,{types:n})}},{header:"Default",hash:"default",render:function(e){var n=e.defaultValue;return l(o.a,{highlight:!1},n)}},{header:"Description",hash:"description",width:"50%",render:function(e){var n=e.description;return l(r.Text,null,n)}}],items:a}),l(r.Small,{marginTop:"xSmall"},"Props ending with * are required"))};return n?l(s.a,{title:"".concat(c," Props")},p()):l(i.a.Fragment,null,l(r.H2,{id:t},c),p())},u=function(e){var n=e.types;return Array.isArray(n)?n.map((function(e,t){return l(i.a.Fragment,{key:e},e.type===r.Link?l(o.a,{highlight:!1},e):l(o.a,null,e),t<n.length-1?" | ":null)})):n.type===r.Link?l(o.a,{highlight:!1},n):l(o.a,null,n)}}},[["mBEy",1,2,4,6,7,9,0,3,5,8,10]]]);