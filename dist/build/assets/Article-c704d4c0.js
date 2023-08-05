import{_ as w,o as b,m as i,n as L,a as S,O as D,s as l,r as T,b as f,c as g,d as n,t as s,e as A,f as C}from"./app-0ad4100e.js";import E from"./TagList-6336b62e.js";import"./TagItem-0c09a980.js";const M={class:"flex flex-col mb-40 gap-9 scroll-smooth"},k=["src"],q={class:"flex justify-between"},H={class:"text-sm text-gray-300"},O={class:"text-2xl text-sky-600 lg:text-6xl"},B={key:0,class:"px-2 py-1 text-sm text-white bg-red-500"},N=["innerHTML"],z={__name:"Article",props:{article:Object},setup(r){const c=r;function d(e){const t={hour:"numeric",minute:"numeric",year:"numeric",month:"short",day:"numeric",weekday:"short"};return typeof e=="string"?e=new Date(e):e*=1e3,new Date(e).toLocaleDateString("en-GB",t)}function p(e){let o=new DOMParser().parseFromString(e.body,"text/html").querySelectorAll(".table-of-contents");l.sharedData=o&&o.length>0?o.item(0).outerHTML:""}b(async()=>{p(c.article),window.addEventListener("scroll",h);const e=document.querySelector(".table-of-contents");e&&e.querySelectorAll("a").forEach(o=>{o.addEventListener("click",x)});let a=new DOMParser().parseFromString(c.article.body,"text/html");_(a),u(),m(),i.initialize({startOnLoad:!0}),console.log("loaded mermaid"),L(()=>{u(),i.initialize({startOnLoad:!0}),m()}),i.init(null,document.querySelectorAll(".mermaid"))});function m(){i.init(void 0,document.querySelectorAll(".mermaid"))}function u(){document.querySelectorAll("pre.mermaid, pre>code.language-mermaid").forEach(e=>{e.classList.remove("torchlight"),e.tagName==="CODE"&&(e=e.parentElement),console.log(`Sanitizing element: ${e.outerHTML}`),e.outerHTML=`
    <div class="mermaid">${e.textContent}</div>
    <details>
      <summary>Diagram source</summary>
      <pre>${e.textContent}</pre>
    </details>
  `})}S(()=>{window.removeEventListener("scroll",h)}),D.on("before",e=>{l.sharedData=[]});let y=T("");function h(){const e=document.querySelectorAll("h2, h3, h4, h5, h6");let t="";for(const a of e)a.getBoundingClientRect().top<window.innerHeight/2&&(t=a.firstElementChild.id),a.querySelector("a").addEventListener("click",v);y.value=t,l.activeHeading=t}function v(e){e.preventDefault(),window.scrollTo({top:e.target.offsetTop,behavior:"smooth"})}function x(e){e.preventDefault();const t=document.querySelector('a[id="'+e.target.href.split("#")[1]+'"]');t&&window.scrollTo({top:t.offsetTop,behavior:"smooth"})}function _(e){let t=e.querySelectorAll("code");t&&t.length>0&&t.forEach(a=>{a.getAttribute("data-lang")==="mermaid"&&(console.log(a),a.className="mermaid",a.classList.add("mermaid"),a.classList.remove("torchlight"))})}return(e,t)=>(f(),g("div",M,[n("div",null,[n("img",{src:r.article.meta.image,class:"w-full rounded-md shadow-md",alt:"cover image"},null,8,k)]),n("div",q,[n("span",H,s(d(r.article.meta.published_at)),1),A(E,{tags:r.article.tags},null,8,["tags"])]),n("div",O,s(r.article.meta.title),1),parseInt(r.article.meta.published_at)<parseInt(r.article.meta.updated_at)?(f(),g("span",B,"Article last updated on: "+s(d(r.article.meta.updated_at)),1)):C("",!0),n("div",{innerHTML:r.article.body},null,8,N)]))}},F=w(z,[["__scopeId","data-v-cb86aed2"]]);export{F as default};
