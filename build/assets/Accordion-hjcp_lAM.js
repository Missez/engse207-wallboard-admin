import{r as o,_ as v,R as m,b as x,c as g,P as t,j as e}from"./index-DtynSD_N.js";import{a as I}from"./DefaultLayout-CS7vQ9VZ.js";import"./index.esm-OdJseasS.js";import{C as H,a as O}from"./CRow-C6eBpKZy.js";import{C as S,a as N}from"./CCardBody-CI7FwU3W.js";import{C as T}from"./CCardHeader-DPlZwqkv.js";import{C as M}from"./CCollapse-BGFsR-K0.js";import"./cil-user-Dlmw-Gem.js";var R=o.createContext({}),f=o.forwardRef(function(s,c){var l=s.children,d=s.activeItemKey,i=s.alwaysOpen,u=i===void 0?!1:i,h=s.className,p=s.flush,y=v(s,["children","activeItemKey","alwaysOpen","className","flush"]),j=o.useState(d),b=j[0],w=j[1];return m.createElement("div",x({className:g("accordion",{"accordion-flush":p},h)},y,{ref:c}),m.createElement(R.Provider,{value:{_activeItemKey:b,alwaysOpen:u,setActiveKey:w}},l))});f.propTypes={alwaysOpen:t.bool,activeItemKey:t.oneOfType([t.number,t.string]),children:t.node,className:t.string,flush:t.bool};f.displayName="CAccordion";var A=o.createContext({}),a=o.forwardRef(function(s,c){var l=s.children,d=s.className,i=s.itemKey,u=v(s,["children","className","itemKey"]),h=o.useRef(i??Math.random().toString(36).slice(2,11)),p=o.useContext(R),y=p._activeItemKey,j=p.alwaysOpen,b=p.setActiveKey,w=o.useState(y===h.current),C=w[0],E=w[1];return o.useEffect(function(){!j&&C&&b(h.current)},[C]),o.useEffect(function(){E(y===h.current)},[y]),m.createElement("div",x({className:g("accordion-item",d)},u,{ref:c}),m.createElement(A.Provider,{value:{setVisible:E,visible:C}},l))});a.propTypes={children:t.node,className:t.string,itemKey:t.oneOfType([t.number,t.string])};a.displayName="CAccordionItem";var n=o.forwardRef(function(s,c){var l=s.children,d=s.className,i=v(s,["children","className"]),u=o.useContext(A).visible;return m.createElement(M,{className:"accordion-collapse",visible:u},m.createElement("div",x({className:g("accordion-body",d)},i,{ref:c}),l))});n.propTypes={children:t.node,className:t.string};n.displayName="CAccordionBody";var K=o.forwardRef(function(s,c){var l=s.children,d=s.className,i=v(s,["children","className"]),u=o.useContext(A),h=u.visible,p=u.setVisible;return m.createElement("button",x({type:"button",className:g("accordion-button",{collapsed:!h},d),"aria-expanded":!h,onClick:function(){return p(!h)}},i,{ref:c}),l)});K.propTypes={children:t.node,className:t.string};K.displayName="CAccordionButton";var r=o.forwardRef(function(s,c){var l=s.children,d=s.className,i=v(s,["children","className"]);return m.createElement("div",x({className:g("accordion-header",d)},i,{ref:c}),m.createElement(K,null,l))});r.propTypes={children:t.node,className:t.string};r.displayName="CAccordionHeader";const _=()=>e.jsx(H,{children:e.jsxs(O,{xs:12,children:[e.jsxs(S,{className:"mb-4",children:[e.jsx(T,{children:e.jsx("strong",{children:"React Accordion"})}),e.jsxs(N,{children:[e.jsx("p",{className:"text-body-secondary small",children:"Click the accordions below to expand/collapse the accordion content."}),e.jsx(I,{href:"components/accordion",children:e.jsxs(f,{activeItemKey:2,children:[e.jsxs(a,{itemKey:1,children:[e.jsx(r,{children:"Accordion Item #1"}),e.jsxs(n,{children:[e.jsx("strong",{children:"This is the first item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",e.jsx("code",{children:".accordion-body"}),", though the transition does limit overflow."]})]}),e.jsxs(a,{itemKey:2,children:[e.jsx(r,{children:"Accordion Item #2"}),e.jsxs(n,{children:[e.jsx("strong",{children:"This is the second item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",e.jsx("code",{children:".accordion-body"}),", though the transition does limit overflow."]})]}),e.jsxs(a,{itemKey:3,children:[e.jsx(r,{children:"Accordion Item #3"}),e.jsxs(n,{children:[e.jsx("strong",{children:"This is the second item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",e.jsx("code",{children:".accordion-body"}),", though the transition does limit overflow."]})]})]})})]})]}),e.jsxs(S,{className:"mb-4",children:[e.jsxs(T,{children:[e.jsx("strong",{children:"React Accordion"})," ",e.jsx("small",{children:"Flush"})]}),e.jsxs(N,{children:[e.jsxs("p",{className:"text-body-secondary small",children:["Add ",e.jsx("code",{children:"flush"})," to remove the default ",e.jsx("code",{children:"background-color"}),", some borders, and some rounded corners to render accordions edge-to-edge with their parent container."]}),e.jsx(I,{href:"components/accordion#flush",children:e.jsxs(f,{flush:!0,children:[e.jsxs(a,{itemKey:1,children:[e.jsx(r,{children:"Accordion Item #1"}),e.jsxs(n,{children:[e.jsx("strong",{children:"This is the first item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",e.jsx("code",{children:".accordion-body"}),", though the transition does limit overflow."]})]}),e.jsxs(a,{itemKey:2,children:[e.jsx(r,{children:"Accordion Item #2"}),e.jsxs(n,{children:[e.jsx("strong",{children:"This is the second item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",e.jsx("code",{children:".accordion-body"}),", though the transition does limit overflow."]})]}),e.jsxs(a,{itemKey:3,children:[e.jsx(r,{children:"Accordion Item #3"}),e.jsxs(n,{children:[e.jsx("strong",{children:"This is the second item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",e.jsx("code",{children:".accordion-body"}),", though the transition does limit overflow."]})]})]})})]})]}),e.jsxs(S,{className:"mb-4",children:[e.jsxs(T,{children:[e.jsx("strong",{children:"React Accordion"})," ",e.jsx("small",{children:"Always open"})]}),e.jsxs(N,{children:[e.jsxs("p",{className:"text-body-secondary small",children:["Add ",e.jsx("code",{children:"alwaysOpen"})," property to make accordion items stay open when another item is opened."]}),e.jsx(I,{href:"components/accordion#flush",children:e.jsxs(f,{alwaysOpen:!0,children:[e.jsxs(a,{itemKey:1,children:[e.jsx(r,{children:"Accordion Item #1"}),e.jsxs(n,{children:[e.jsx("strong",{children:"This is the first item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",e.jsx("code",{children:".accordion-body"}),", though the transition does limit overflow."]})]}),e.jsxs(a,{itemKey:2,children:[e.jsx(r,{children:"Accordion Item #2"}),e.jsxs(n,{children:[e.jsx("strong",{children:"This is the second item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",e.jsx("code",{children:".accordion-body"}),", though the transition does limit overflow."]})]}),e.jsxs(a,{itemKey:3,children:[e.jsx(r,{children:"Accordion Item #3"}),e.jsxs(n,{children:[e.jsx("strong",{children:"This is the second item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",e.jsx("code",{children:".accordion-body"}),", though the transition does limit overflow."]})]})]})})]})]})]})});export{_ as default};
