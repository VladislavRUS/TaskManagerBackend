function dateFactory() {
    var factory = {};

    var quoterObject = {
        1:  1,
        2:  1,
        3:  1,

        4:  2,
        5:  2,
        6:  2,

        7:  3,
        8:  3,
        9:  3,

        10: 4,
        11: 4,
        12: 4
    };

    factory.monthLastInQuoter = function(month) {
        return (month == 3) || (month == 6) || (month == 8) || (month == 12);
    };

    factory.getMonthQuoter = function(month) {
        return quoterObject[month];
    };

    factory.daysInMonth = function(month) {
        var year = new Date().getUTCFullYear();
        return new Date(year, month, 0).getDate();
    };

    factory.expiresIn = function(quoter, year) {
        var dateObject = new Date();

        var currentYear = dateObject.getUTCFullYear();

        if (year < currentYear) {
            return -1;

        } else if (year > currentYear) {
            return 100;
        }

        var month = dateObject.getUTCMonth() + 1;
        var monthQuoter = factory.getMonthQuoter(month);

        if (monthQuoter > quoter) {
            return -1;
        }

        if (factory.monthLastInQuoter(month)) {
            var daysInMonth = factory.daysInMonth(month);
            var day = dateObject.getUTCDate();

            return daysInMonth - day;

        } else {
            return 100;
        }
    };

    return factory;
}