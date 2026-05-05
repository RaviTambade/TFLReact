const express = require('express');
const cors = require('cors'); // Optional for handling CORS

const app = express();
const port = 4000; // You can use any port you like

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies

// Sample data

const posts = [
  { id: 1, title: 'Knowledge is not wisdom unless it’s reflected in one’s actions.', content: 'The measure of true education is not in certificates, but in skill set. You could collect knowledge but you need to put your efforts to earn the experience.' },
  { id: 2, title: 'Job Guarantee Course: A Delusion', content: 'A job guarantee course refers to a training program that promises participants about employment upon completion of the program.' },
  { id: 3, title: 'Are we on right Path?', content: 'So many candidates have appeared. So many degree holders are in queue. This is the reality of the current market. Is that demand and supply problem or candidates with Projet ready skill deficiency.' },

  { id: 4, title: 'Skill First, Degree Next', content: 'In today’s industry, your ability to solve problems matters more than your academic score. Build real-world projects to stand out.' },
  { id: 5, title: 'Learning by Doing', content: 'Reading concepts is not enough. Implementation is where true understanding begins. Code, break, fix, and repeat.' },
  { id: 6, title: 'Small Companies, Big Learning', content: 'Working in small teams exposes you to complete project lifecycles, making you more industry-ready than isolated roles.' },
  { id: 7, title: 'Consistency Beats Talent', content: 'A consistent learner with average talent will always outperform a talented but inconsistent individual.' },
  { id: 8, title: 'From Tutorials to Projects', content: 'Stop being stuck in tutorial loops. Build something of your own to truly test your understanding.' },
  { id: 9, title: 'Debugging is Learning', content: 'Every bug you fix improves your thinking. Debugging is not frustration—it is growth in disguise.' },
  { id: 10, title: 'Understand Before You Use', content: 'Frameworks are powerful, but without understanding fundamentals, you will struggle in real-world scenarios.' },
  { id: 11, title: 'Think Like a Problem Solver', content: 'Companies hire problem solvers, not just coders. Focus on logic, clarity, and structured thinking.' },
  { id: 12, title: 'Build Your Portfolio Early', content: 'A strong portfolio speaks louder than resumes. Showcase your work through GitHub and live demos.' },
  { id: 13, title: 'Don’t Chase Trends Blindly', content: 'Every new technology looks attractive, but mastering fundamentals will always give you long-term stability.' },
  { id: 14, title: 'Communication is a Core Skill', content: 'Being able to explain your solution clearly is as important as writing the code itself.' },
  { id: 15, title: 'Teamwork Builds Engineers', content: 'Working with others teaches collaboration, version control, and handling real-world project challenges.' },
  { id: 16, title: 'Learn How Systems Work', content: 'Understanding how frontend, backend, database, and APIs interact makes you a complete developer.' },
  { id: 17, title: 'Mistakes are Investments', content: 'Every wrong implementation teaches a lesson. The more mistakes you make, the stronger you become.' },
  { id: 18, title: 'Time Management is a Superpower', content: 'Balancing learning, practice, and revision efficiently can accelerate your growth exponentially.' },
  { id: 19, title: 'Focus on Depth, Not Just Breadth', content: 'Knowing many technologies superficially is less valuable than mastering a few deeply.' },
  { id: 20, title: 'Adaptability is Survival', content: 'Technology evolves rapidly. Your ability to learn and adapt determines your relevance in the industry.' },
  { id: 21, title: 'Code with Purpose', content: 'Don’t just write code to complete tasks. Write code that solves real problems and adds value.' },
  { id: 22, title: 'Discipline Over Motivation', content: 'Motivation fades quickly. Discipline keeps you moving forward even on difficult days.' },
  { id: 23, title: 'Practice Makes You Confident', content: 'Confidence in coding comes from repeated practice and real-world exposure, not just theory.' }
];

// Routes
app.get('/api/posts', (req, res) => {
  res.json(posts);
});

// Start the server
app.listen(port, () => {
 console.log("Bloggers Service hosted");
  console.log(`Server running at http://localhost:${port}`);
});