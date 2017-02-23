import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import Countdown from 'CountdownComponent';

describe('Countdown', () => {
   it('should exist', () => {
      expect(Countdown).toExist();
   });

   describe('handeSetCountdown', function() {
     it('should set state to started and contdown', (done) => {
       var countdown = TestUtils.renderIntoDocument(<Countdown />);
       countdown.handleSetCountdown(10);

       expect(countdown.state.count).toBe(10);
       expect(countdown.state.countdownStatus).toBe('started');

       setTimeout(()=>{
         expect(countdown.state.count).toBe(9);
         done();
       }, 1010);
     });

     it('should never set count less than zero', (done) => {
       var countdown = TestUtils.renderIntoDocument(<Countdown />);
       countdown.handleSetCountdown(1);

       setTimeout(()=>{
         expect(countdown.state.count).toBe(0);
         done();
       }, 2010);
     });

     it('should have paused status when paused', (done) => {
       // body...
       var countdown = TestUtils.renderIntoDocument(<Countdown />);
       countdown.handleSetCountdown(3);
       countdown.handleStatusChange('paused');

       setTimeout(()=>{
         expect(countdown.state.count).toBe(3);
         expect(countdown.state.countdownStatus).toBe('paused');
         done();
       }, 2010);
     });

     it('should have stopped status when stopped', (done) => {
       // body...
       var countdown = TestUtils.renderIntoDocument(<Countdown />);
       countdown.handleSetCountdown(3);
       countdown.handleStatusChange('stopped');

       setTimeout(()=>{
         expect(countdown.state.count).toBe(0);
         expect(countdown.state.countdownStatus).toBe('stopped');
         done();
       }, 1010);
     });

   });
});
