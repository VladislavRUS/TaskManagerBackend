function toastFactory() {
	var factory = {};

	factory.toast = function (title, message, options) {
		iziToast.show({
			title: title,
			message: message,
			color: options.color || 'blue'
		});
	};

	factory.successToast = function (text) {
		iziToast.info({
			title: text,
			// titleColor: '#3c763d',
			// color: '#dff0d8'
		});
	};

	return factory;
}