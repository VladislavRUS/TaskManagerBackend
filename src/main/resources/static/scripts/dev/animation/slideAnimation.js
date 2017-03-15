function slideAnimation() {
    return {
        enter: function(element, doneFn) {
            element.velocity('slideDown', {
                duration: 250,
                easing: [0.4, 0.0, 0.2, 1],
                complete: function() {
                    doneFn();
                }
            })
        },
        leave: function(element, doneFn) {
            element.velocity('slideUp', {
                duration: 200,
                easing: [0.4, 0.0, 0.2, 1],
                complete: function() {
                    doneFn();
                }
            })
        }
    }
}