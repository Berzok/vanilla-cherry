let cherry = function () {

    /**
     * Create a new HTMLElement, created according to the parameters, and returns it
     * @param {String} nodeType - Type (tag) of the HTMLElement to create
     * @param {String} id - If defined, id of the newly born HTMLElement
     * @param {Array.<String>} classes - Array of classes, applied to the created node
     * @param {InnerHTML} innerHTML - Optional innerHTML
     * @returns {HTMLElement}
     */
    function createNode(nodeType, id = null, classes = null, innerHTML = null) {
        let node = document.createElement(nodeType);
        if (id) {
            node.id = id;
        }
        if (classes) {
            node.classList.add(...classes);
        }
        return node;
    }


    /**
     *
     * @param {HTMLElement} node
     * @param {String} cl
     * @param {Boolean} condition
     * @returns {boolean}
     */
    function toggleClass(node, cl, condition) {
        //La condition est-elle remplie ?
        if (condition) {

            //La classe est-elle présente ?
            if (node.classList.contains(cl)) {
                return false;
            } else {
                return node.classList.toggle(cl);
            }

        } else {
            //La classe est-elle présente ?
            if (node.classList.contains(cl)) {
                return node.classList.toggle(cl);
            } else {
                return false;
            }
        }
    }

}


module.exports = cherry;