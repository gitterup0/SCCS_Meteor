import { Template } from 'meteor/templating';
import './like.html';
import './message.html';
import './message.js';
import { ReactiveVar } from 'meteor/reactive-var';

// Template.like.onCreated(function likeOnCreated() {
//   // start with 0 likes
//   this.counter = new ReactiveVar(0);
// });

// Template.like.helpers({
//   counter() {
//     return Template.instance().counter.get();
//   },
// });

// Template.like.events({
//   'click .btn'(event, instance) {
//     // increment the counter when button is clicked
//     instance.counter.set(instance.counter.get() + 1);
//   },
// });
