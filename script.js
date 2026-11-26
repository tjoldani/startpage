// script.js — clock and quote of the day for the start page.

(function () {
  'use strict';

  // --- Clock ---------------------------------------------------------------
  var timeEl = document.getElementById('time');
  var dateEl = document.getElementById('date');

  function updateClock() {
    var now = new Date();

    var time = now.toLocaleTimeString(undefined, {
      hour: 'numeric',
      minute: '2-digit',
    });

    var date = now.toLocaleDateString(undefined, {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    });

    if (timeEl) timeEl.textContent = time;
    if (dateEl) dateEl.textContent = date;
  }

  updateClock();
  setInterval(updateClock, 1000);

  // --- Quote of the day ----------------------------------------------------
  // A curated local list. The quote is chosen by the calendar day, so it is
  // stable all day and rotates daily — no network calls, no tracking.
  var quotes = [
    { text: 'The best way to predict the future is to invent it.', author: 'Alan Kay' },
    { text: 'Simplicity is the ultimate sophistication.', author: 'Leonardo da Vinci' },
    { text: 'What we think, we become.', author: 'Buddha' },
    { text: 'It always seems impossible until it is done.', author: 'Nelson Mandela' },
    { text: 'The only way to do great work is to love what you do.', author: 'Steve Jobs' },
    { text: 'Well done is better than well said.', author: 'Benjamin Franklin' },
    { text: 'Whether you think you can or you think you can not, you are right.', author: 'Henry Ford' },
    { text: 'The journey of a thousand miles begins with a single step.', author: 'Lao Tzu' },
    { text: 'We are what we repeatedly do. Excellence, then, is not an act but a habit.', author: 'Aristotle' },
    { text: 'Everything you can imagine is real.', author: 'Pablo Picasso' },
    { text: 'Do not go where the path may lead, go instead where there is no path and leave a trail.', author: 'Ralph Waldo Emerson' },
    { text: 'The future belongs to those who believe in the beauty of their dreams.', author: 'Eleanor Roosevelt' },
    { text: 'Quality is not an act, it is a habit.', author: 'Aristotle' },
    { text: 'Make it work, make it right, make it fast.', author: 'Kent Beck' },
    { text: 'Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.', author: 'Antoine de Saint-Exupery' },
    { text: 'Stay hungry, stay foolish.', author: 'Stewart Brand' },
    { text: 'The secret of getting ahead is getting started.', author: 'Mark Twain' },
    { text: 'Action is the foundational key to all success.', author: 'Pablo Picasso' },
    { text: 'Happiness is not something ready made. It comes from your own actions.', author: 'Dalai Lama' },
    { text: 'In the middle of difficulty lies opportunity.', author: 'Albert Einstein' },
    { text: 'Knowing yourself is the beginning of all wisdom.', author: 'Aristotle' },
    { text: 'The mind is everything. What you think you become.', author: 'Buddha' },
    { text: 'Life is really simple, but we insist on making it complicated.', author: 'Confucius' },
    { text: 'It is not length of life, but depth of life.', author: 'Ralph Waldo Emerson' },
    { text: 'The best revenge is massive success.', author: 'Frank Sinatra' },
    { text: 'Fall seven times, stand up eight.', author: 'Japanese proverb' },
    { text: 'A person who never made a mistake never tried anything new.', author: 'Albert Einstein' },
    { text: 'Everything should be made as simple as possible, but not simpler.', author: 'Albert Einstein' },
    { text: 'The only limit to our realization of tomorrow is our doubts of today.', author: 'Franklin D. Roosevelt' },
    { text: 'Courage is grace under pressure.', author: 'Ernest Hemingway' },
    { text: 'What you do makes a difference, and you have to decide what kind of difference you want to make.', author: 'Jane Goodall' },
    { text: 'The way to get started is to quit talking and begin doing.', author: 'Walt Disney' },
    { text: 'Creativity is intelligence having fun.', author: 'Albert Einstein' },
    { text: 'Do what you can, with what you have, where you are.', author: 'Theodore Roosevelt' },
    { text: 'The present moment is the only time over which we have dominion.', author: 'Thich Nhat Hanh' },
    { text: 'Turn your wounds into wisdom.', author: 'Oprah Winfrey' },
    { text: 'If you want to go fast, go alone. If you want to go far, go together.', author: 'African proverb' },
    { text: 'The obstacle is the way.', author: 'Marcus Aurelius' },
    { text: 'Waste no more time arguing about what a good person should be. Be one.', author: 'Marcus Aurelius' },
    { text: 'Nothing is a waste of time if you use the experience wisely.', author: 'Auguste Rodin' },
  ];

  function dayOfYear(d) {
    var start = Date.UTC(d.getFullYear(), 0, 0);
    var today = Date.UTC(d.getFullYear(), d.getMonth(), d.getDate());
    return Math.floor((today - start) / 86400000);
  }

  var quoteTextEl = document.getElementById('quote-text');
  var quoteAuthorEl = document.getElementById('quote-author');
  var pick = quotes[dayOfYear(new Date()) % quotes.length];

  if (quoteTextEl) quoteTextEl.textContent = pick.text;
  if (quoteAuthorEl) quoteAuthorEl.textContent = pick.author;
})();
