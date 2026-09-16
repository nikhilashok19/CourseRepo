/* =========================================================================
   ANNOUNCEMENTS
   Edit this file by hand — the generator never touches it.

   Each announcement is an object:
     title    (optional) heading shown above the text
     text     the announcement body. Multi-line is fine: use \n for line
              breaks, or a `backtick` string written across several lines.
     date     (optional) small line under the text, e.g. "15 Sep 2026"
     interval how long this one stays on screen, in milliseconds.
              10000 = 10 seconds. Omit it to use defaultInterval below.

   They play as a carousel on the homepage, one at a time, sliding in from
   the left. Viewers can click the arrows or dots to move early.
   Empty the items array to show "No announcements right now."
   ========================================================================= */
window.ANNOUNCEMENTS = {
  defaultInterval: 10000, // used by any announcement without its own interval

  items: [
    {
      title: "Advanced Algorithm Analysis Quiz 1",
      text: "Dear students, Please note and prepare for a quiz in tomorrow class. Topic will be recursion. It will  not language specific you can write a pseudo code that in c++/java or python like Please solve various recursion problems like the one we did in class to prepare CR please inform any student who is not in this email group. And also send me an email as I have accidently deleted your earlier email I think",
      date: "16 Sep 2026",
      interval: 10000,
    },
    {
      title: "Advanced Theory of Computation - Question",
      text: "If we have a finite language and we consider that we have infinite compute power and we train our language model on this finite data. Will this model have all the possible answers to the questions that will be asked to it already calculated?",
      date: "11 Sep 2026",
      interval: 10000,
    },
  ],
};
