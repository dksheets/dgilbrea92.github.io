import { makeParagraph } from "./view.utils.js";
export function makePortfolioView() {
    const view = document.createElement("div");
    const content = makeParagraph("My portfolio will go here... one day.");
    view.appendChild(content);
    return view;
}
//# sourceMappingURL=portfolio.view.js.map