import '../imports/startup/i18n'
import '../imports/ui/survey/survey'
import 'bootstrap'
import './main.scss';
import './main.html';

Template.body.helpers({
  started () {
    return Template.getState('started')
  }
})

Template.body.events({
  'click .continue-button'(event, templateInstance) {
    event.preventDefault()
    templateInstance.state.set('started', true)
  }
})