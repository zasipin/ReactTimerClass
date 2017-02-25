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
     it('should start with stopped state', ()=>{
       var timer = TestUtils.renderIntoDocument(<Timer/>);
       expect(timer.state.timerStatus).toBe('stopped');
     })

     it('should initially show "Start" button', ()=>{
       var timer = TestUtils.renderIntoDocument(<Timer/>);

       var $el = $(ReactDOM.findDOMNode(timer));
       var actualText = $el.find('.button.primary').text();

       expect(actualText).toBe('Start');
     })

     it('should have stopped starte on stopped state initialized', ()=>{
       var timer = TestUtils.renderIntoDocument(<Timer/>);
       timer.handleStatusChange('stopped');

       expect(timer.state.timerStatus).toBe('stopped');
     })

     it('should add seconds', (done)=>{
       var timer = TestUtils.renderIntoDocument(<Timer/>);
       timer.handleStatusChange('started');
       expect(timer.state.count).toBe(0);
       setTimeout(()=>{
         expect(timer.state.count).toBe(1);
         expect(timer.state.timerStatus).toBe('started');
         done();
       }, 1010);
     });

     it('should pause timer', (done)=>{
       var timer = TestUtils.renderIntoDocument(<Timer/>);
       timer.setState({count: 10})
       timer.handleStatusChange('started');
       timer.handleStatusChange('paused');
       expect(timer.state.count).toBe(10);
       setTimeout(()=>{
         expect(timer.state.count).toBe(10);
         expect(timer.state.timerStatus).toBe('paused');
         done();
       }, 1010);
     });

     it('should stop timer', ()=>{
       var timer = TestUtils.renderIntoDocument(<Timer/>);
       timer.setState({count: 10})
       timer.handleStatusChange('started');
       timer.handleStatusChange('stopped');
       expect(timer.state.count).toBe(0);
       expect(timer.state.timerStatus).toBe('stopped');
     });


   });

});
