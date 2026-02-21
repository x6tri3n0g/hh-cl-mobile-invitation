"use client";

import SwitcherRoot from "./SwitcherRoot";
import SwitcherList from "./SwitcherList";
import SwitcherItem from "./SwitcherItem";
import SwitcherPanel from "./SwitcherPanel";

export const Switcher = Object.assign(SwitcherRoot, {
    List: SwitcherList,
    Item: SwitcherItem,
    Panel: SwitcherPanel,
});

export default Switcher;
