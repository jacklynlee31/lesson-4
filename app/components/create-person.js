import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createPerson: function() {
        Ember.$.ajax({
          method: 'POST',
          url: 'http://tiny-lr.herokuapp.com/collections/rt-person',
          // what data are you sending?
          data: JSON.stringify(this.getProperties('first', 'last', 'address', 'phone')),
          contentType: 'application/json',
        });
    }
  }
});
