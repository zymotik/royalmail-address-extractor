(function() {
    const listSelector = 'pcalist';
    const itemSelector = 'pcaitem';
    /*RegEx match: "7", "12A", "Apartment 4, 23", "Flat A, 1", "Any amount of words until first comma" */
    const numberRegex = /(^[0-9]+\w*)|(^\w+[0-9]*\s(\d|\w)[,]?\s[0-9]+\w*)|(^.+?(?=,))/;

    function mapElementAttributeToNumber(element) {
        const matches = element.getAttribute('title').match(numberRegex);
        return matches && matches.length > 0 && matches[0];
    }

    function format(list) {
        return list.join(', ');
    }

    function extractAddresses() {
        return Array.from(
            document.getElementsByClassName(listSelector)[0]
                    .getElementsByClassName(itemSelector)
                    ).map(mapElementAttributeToNumber)
                     .filter(v => !!v);
    }

    alert(format(extractAddresses()));
})();
