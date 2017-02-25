import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import Timer from 'TimerComponent';

describe('Timer', () => {
   it('should exist', () => {
      expect(Timer).toExist();
   });

   describe('handeSetCountdown', ()=>{
     it('should start with paused state', ()=>{
       var timer = TestUtils.renderIntoDocument(<Timer/>);
       expect(timer.state.countdownStatus).toBe('paused');
     })

     it('should initially show "Start" button', ()=>{
       var timer = TestUtils.renderIntoDocument(<Timer/>);

       var $el = $(ReactDOM.findDOMNode(timer));
       var actualText = $el.find('.button.primary').text();

       expect(actualText).toBe('Start');
     })

     it('should have paused starte on stopped state initialized', ()=>{
       var timer = TestUtils.renderIntoDocument(<Timer/>);
       timer.handleStatusChange('stopped');

       expect(timer.state.countdownStatus).toBe('paused');
     })

     it('should add seconds', (done)=>{
       var timer = TestUtils.renderIntoDocument(<Timer/>);
       timer.handleStatusChange('started');
       setTimeout(()=>{
         expect(timer.state.count).toBe(1);
         done();
       }, 1010);
     })

   });

});
