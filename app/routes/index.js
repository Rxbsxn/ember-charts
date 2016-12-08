import Ember from 'ember';

let grades = [{
  name: '1',
  quantity: 60
}, {
  name: '2',
  quantity: 70
}, {
  name: '3',
  quantity: 2
}, {
  name: '4',
  quantity: 816
}, {
  name: '5',
  quantity: 32
}, {
  name: '6',
  quantity: 80
}];



export default Ember.Route.extend({
  model() {
    return grades;
  },

  db() {

  }
  // numberData: Ember.computed('grades', function(){
  //   return {
  //     labels: this.get('grades').mapBy('name'),
  //     datasets: [{
  //       label: 'My grades',
  //       data: this.get('grades').mapBy('quantity')
  //     }]
  //   };
  // })
});
