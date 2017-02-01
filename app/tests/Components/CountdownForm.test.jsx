import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import CountdownForm from 'CountdownForm';

describe('CountdownForm', () => {
   it('should exist', () => {
      expect(CountdownForm).toExist();
   });

   it('should call onSetCountdown if valid seconds entered', () => {
     var spy = expect.createSpy();
     var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
     var $el = $(ReactDOM.findDOMNode(countdownForm));
     countdownForm.refs.seconds.value = '109';
     TestUtils.Simulate.submit($el.find('form')[0]);
     expect(spy).toHaveBeenCalledWith(109);
   });

   it('should not call onSetCountdown if not valid seconds entered', () => {
     var spy = expect.createSpy();
     var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
     var $el = $(ReactDOM.findDOMNode(countdownForm));
     countdownForm.refs.seconds.value = 'abc';
     TestUtils.Simulate.submit($el.find('form')[0]);
     expect(spy).toNotHaveBeenCalledWith();
   });
});
