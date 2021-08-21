(function() {
    const listSelector = 'pcalist';
    const itemSelector = 'pcaitem';
    const numberRegex = /[0-9]*\w*/;

    function mapElementAttributeToNumber(element) {
        return element.getAttribute('title').match(numberRegex);
    }

    function format(list) {
        return list.join(', ');
    }

    function extractAddresses() {
        return Array.from(
            document.getElementsByClassName(listSelector)[0]
                    .getElementsByClassName(itemSelector))
                    .map(mapElementAttributeToNumber).filter(v => !!v);
    }

    alert(format(extractAddresses()));
})();
