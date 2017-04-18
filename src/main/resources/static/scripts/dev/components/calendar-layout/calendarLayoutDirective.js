function calendarLayoutDirective($state, $timeout, eventsFactory, notificationsFactory) {
	return {
		scope: {},
		bindToController: {},
		templateUrl: 'scripts/dev/components/calendar-layout/calendar-layout.tmpl.html',
		controller: function () {
			var self = this;

			self.currentDate = new Date();
			self.currentEvent = null;
			self.update = false;

			self.uiConfig = {
				calendar: {
					editable: false,
					header: {
						left: 'month agendaWeek agendaDay',
						center: 'title',
						right: 'today prev,next'
					},
					height: 500,
					dayClick: function (date) {
						self.currentEvent = {};
						self.currentEvent.date = new Date(date);
						self.update = false;
						openModal('createEventModal');
					},

					eventClick: function (calEvent, jsEvent, view) {
						self.currentEvent = {};
						self.currentEvent.title = calEvent.title;
						self.currentEvent.comment = calEvent.comment;
						self.currentEvent.uuid = calEvent.uuid;
						self.currentEvent.date = calEvent.start._i;
						self.currentEvent.custom = calEvent.custom || false;
						self.update = true;
						openModal('createEventModal');
					},

					dayRender: function (date, cell) {
						var day = new Date(date);
						var isWeekend = false;

						if (day.getDay() == 6 || day.getDay() == 0) {
							isWeekend = true;
						}

						if (isWeekend) {
							$(cell).css({
								'background-color': '#ffc4b7'
							});
						}

						$(cell).css({
							'cursor': 'pointer'
						});
					},

					lang: 'ru'
				}
			};

			self.eventSources = [];

			eventsFactory.getEvents().then(function () {
				self.eventSources.push(
					{
						events: eventsFactory.events
							.map(function (event) {
								console.log(event);

								return {
									uuid: event.uuid,
									title: event.title,
									start: event.date,
									comment: event.comment
								}
							})
					});

				self.eventSources.push({
					events: notificationsFactory.notifications.filter(function (n) {
						return n.type.split(':')[0] !== 'event'
					})
						.map(function (n) {
							return {
								uuid: n.uuid,
								title: n.title,
								start: n.date,
								comment: n.text,
								custom: true
							}
						})
				})
			});

			self.save = function () {
				if (self.update) {
					eventsFactory.updateEvent(self.currentEvent).then(function () {
						closeModal('createEventModal');
						reloadState();
					});

				} else {
					eventsFactory.addEvent(self.currentEvent).then(function () {
						closeModal('createEventModal');
						reloadState();
					});
				}
			};

			self.delete = function () {
				var event = {uuid: self.currentEvent.uuid};

				eventsFactory.removeEvent(event).then(function () {
					closeModal('createEventModal');
					reloadState();
				});
			};

			function closeModal(id) {
				var el = angular.element(document).find('#' + id);
				el.modal('hide');
			}

			function openModal(id) {
				var el = angular.element(document).find('#' + id);
				el.modal('show');
			}

			function reloadState() {
				$timeout(function () {
					$state.reload();
				}, 500);
			}
		},

		link: function () {
			$timeout(function () {
				$('.fc-day-number').each(function (i, obj) {
					var bgColor = $(obj).css('background-color');

					$(obj).bind('mouseover', function () {
						$(this).css({
							'background-color': '#e5e3e3'
						})
					});

					$(obj).bind('mouseout', function () {
						$(this).css({
							'background-color': bgColor
						})
					});
				});

			}, 1000);
		},

		controllerAs: 'ctrl'
	}
}