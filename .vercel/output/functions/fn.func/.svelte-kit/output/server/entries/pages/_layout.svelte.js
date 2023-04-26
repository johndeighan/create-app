import { c as create_ssr_component } from "../../chunks/index.js";
const app = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "nav.svelte-1hgrq1h.svelte-1hgrq1h{background-color:lightBlue}nav.svelte-1hgrq1h a.svelte-1hgrq1h{border:none;padding:3px 12px;-webkit-text-decoration:none;text-decoration:none;color:black;font-size:16pt;cursor:pointer}nav.svelte-1hgrq1h a.svelte-1hgrq1h:hover{background-color:blue;color:white}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<nav class="svelte-1hgrq1h"><a href="/" class="svelte-1hgrq1h">Home</a>
	<a href="/about" class="svelte-1hgrq1h">About</a>
	<a href="/readme" class="svelte-1hgrq1h">How to build</a></nav>

${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
