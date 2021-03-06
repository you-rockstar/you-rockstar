import Ember from 'ember';
import ScrollToElemMixin from 'you-rockstar/mixins/scroll-to-elem';
import ParallaxMixin from 'you-rockstar/mixins/parallax';

export default Ember.Component.extend(ScrollToElemMixin, ParallaxMixin, {
  classNames: 'full-height',
  didInsertElement: function() {
    this.startParallax();
  },
  willDestroyElement: function() {
    this.dismissParallax();
  }
});
