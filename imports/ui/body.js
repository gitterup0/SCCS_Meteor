import { Template } from 'meteor/templating';
import './body.html';
import './message.js';
import './like.html';
import './like.js';
import { ReactiveVar } from 'meteor/reactive-var';

import { Messages } from '../api/messages.js';
Template.body.helpers({
   messages() {
    return Messages.find();
   },
});

import { Likes } from '../api/likes.js';
Template.body.helpers({
   likes() {
    return Likes.find();
   },
});

Template.body.events({
   'submit .new-message'(event) {
     // Prevent default browser form submit
     event.preventDefault();
     // Get value from form element
     const target = event.target;
     const text = target.text.value;
     // Insert a message into the collection
     Messages.insert({
       text,
       createdAt: new Date(), // current time
 	 //user information
      owner: Meteor.userId(), username:Meteor.user().username,
     });
     // Clear form
     target.text.value = '';
     // scroll to last message
     $('.panel-body').scrollTop($('.media-list').height())
	},


// I think the problem is here and below *****************

  //   'click .btn'(event, instance) {
  //     // increment the counter when button is clicked

  //     // Prevent default browser form submit
  //     event.preventDefault();
  //     const counter = instance.counter.set(instance.counter.get() + 1);
  //     // Insert a like into the collection
      
  //     Likes.insert({
  //       counter,
  //     });
  // },
});

// .new-message is in body.html but the button class is not! Fix that?!?

  // 'click .btn' (event) {
  //   var counter = 0;
  //   Likes.insert({
  //     counter = counter + 1,
  //    });

Template.like.onCreated(function likeOnCreated() {
  // start with 0 likes
  this.counter = new ReactiveVar(0);
});

Template.like.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.like.events({
  'click .btn'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
    Likes.insert({
      counter, 
    });
  },
});

//      console.log(event)
