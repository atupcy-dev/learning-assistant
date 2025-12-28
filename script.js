const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const themeToggle = document.getElementById("themeToggle");

function handleQuestion() {
  const question = userInput.value.trim();
  if (question === "") return;

  addMessage(question, "user");
  userInput.value = "";

  setTimeout(() => {
    const answer = getAnswer(question.toLowerCase());
    addMessage(answer, "bot");
  }, 500);
}

function addMessage(text, sender) {
  const message = document.createElement("div");
  message.className = sender;
  message.textContent = text;
  chatBox.appendChild(message);
  chatBox.scrollTop = chatBox.scrollHeight;
}

const knowledgeBase = {
  "html": "HTML structures web pages using elements like headings, paragraphs, images, and links.",
  "css": "CSS styles web pages. It controls colors, layout, fonts, and responsiveness.",
  "javascript": "JavaScript makes websites interactive by handling logic and user actions.",
  "programming": "Programming is giving instructions to a computer to solve problems.",
  "frontend": "Frontend development focuses on what users see and interact with.",
  "backend": "Backend handles servers, databases, and application logic.",
  "api": "An API allows different software applications to communicate.",
  "computer": "A computer is an electronic device that processes data.",
  "internet": "The internet is a global network of connected computers.",
  "aviation": "Aviation deals with aircraft operation, maintenance, and flight."
};

function getAnswer(question) {
    for (let key in knowledgeBase) {
    if (question.includes(key)) {
      return knowledgeBase[key] + " Would you like me to explain more?";
    }
}
  return "Interesting question 🤔 Can you be more specific?";
}
 
if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");

    themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    
    if (document.body.classList.contains("light-mode")) {
        themeToggle.textContent = "☀️";
        localStorage.setItem("theme", "light");
    } else {
        themeToggle.textContent = "🌙";
        localStorage.setItem("theme", "dark");
    }
});
