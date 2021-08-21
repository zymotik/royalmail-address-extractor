(function() {
    const listSelector = 'pcalist';
    const itemSelector = 'pcaitem';
    const numberRegex = /(^[0-9]+\w*)|(^\w+[0-9]*\s(\d|\w)[,]?\s[0-9]+\w*)/; /* match: "7", "12A", "Apartment 4, 23", "Flat A, 1" (Fix: does not match house or business names) */

    function mapElementAttributeToNumber(element) {
        return element.getAttribute('title').match(numberRegex)[0];
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
