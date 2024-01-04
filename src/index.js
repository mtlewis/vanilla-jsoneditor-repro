import { JSONEditor } from "vanilla-jsoneditor";

new JSONEditor({
  target: document.getElementById('root'),
  props: {
    content: {
      json: {},
    },
  },
});
