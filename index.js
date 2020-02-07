class Formatter {
    //add static methods here
    static capitalize(string) {
        return (string[0]).toUpperCase() + string.slice(1)
    }

    static sanitize(string) {
        return string.replace(/[^-,'A-Za-z0-9,' ']+/g, '')
    }



    static titleize(str) {
        let parseString = str.split(' ');
        let ignoreThese = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];

        parseString = parseString.map(function(elt, index) {
            if (index == 0) return elt[0].toUpperCase() + elt.slice(1);
            else if (ignoreThese.includes(elt)) return elt;
            else return elt[0].toUpperCase() + elt.slice(1);
        }).join(' ')
        return parseString;
    }
}