
import * as View from "../node_modules/prosemirror-view";
import * as Model from "../node_modules/prosemirror-model";
import * as State from "../node_modules/prosemirror-state";
import * as Transform from "../node_modules/prosemirror-transform";
import * as Commands from "../node_modules/prosemirror-commands";
import * as SchemaBasic from "../node_modules/prosemirror-schema-basic";
import * as SchemaList from "../node_modules/prosemirror-schema-list";
import * as SchemaTable from "../node_modules/prosemirror-schema-table";
import * as DropCursor from "../node_modules/prosemirror-dropcursor";
import * as GapCursor from "../node_modules/prosemirror-gapcursor";
import * as Keymap from "../node_modules/prosemirror-keymap";
import * as History from "../node_modules/prosemirror-history";
import * as Tables from "../node_modules/prosemirror-tables";
import * as InputRules from "../node_modules/prosemirror-inputrules";
import * as Utils from "../node_modules/prosemirror-utils";

window.ProseMirror = {
  View,
  Model,
  State,
  Transform,
  Commands,
  SchemaBasic,
  SchemaList,
  SchemaTable,
  DropCursor,
  GapCursor,
  Keymap,
  History,
  Tables,
  InputRules,
  Utils
};
