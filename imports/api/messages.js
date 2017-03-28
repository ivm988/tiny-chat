import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Messages = new Mongo.Collection('messages');

Meteor.methods({

    'messages.insert'(text) {
        check(text, String);

        if (!Meteor.userId()) {
            throw new Meteor.Error('not-authorized');
        }

        if (text.length) {
            Messages.insert({
                text,
                createdAt: new Date(),
                owner: Meteor.userId(),
                username: Meteor.user().username
            });
        }
    },



});
