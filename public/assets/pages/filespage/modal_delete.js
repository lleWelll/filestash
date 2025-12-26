import { createElement } from "../../lib/skeleton/index.js";
import rxjs from "../../lib/rx.js";
import { MODAL_RIGHT_BUTTON } from "../../components/modal.js";
import t from "../../locales/index.js";

export default function(render) {
    return renderDesktop(render);
}

function renderDesktop(render) {
    const $modal = createElement(`
        <div>
            <span style="white-space: nowrap;">
                <span class="no-select">${t("Are you sure to delete?")}</span>
            </span>
        </div>
    `);
    const ret = new rxjs.Subject();
    const pressOK = render($modal, (id) => {
        if (id !== MODAL_RIGHT_BUTTON) {
            return;
        }
        ret.next();
        ret.complete();
        return ret.toPromise();
    }).bind(null, MODAL_RIGHT_BUTTON);

    return ret.toPromise();
}