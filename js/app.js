var quotes = [
  {
    number: "001",
    text: "GET SHIT DONE.",
    author: "Aaron Levie, Box",
    category: "getshitdone"
  },
  {
    number: "002",
    text: "LESS MEETINGS MORE DOING",
    author: "Jason Goldberg, Fab.com",
    category: "getshitdone"
  },
  {
    number: "003",
    text: "PERFECTIONISM IS OFTEN AN EXCUSE FOR PROCRASTINATION.",
    author: "Paul Graham, Y Cominator",
    category: "getshitdone"
  },
  {
    number: "004",
    text: "DO, OR DO NOT. THERE IS NO TRY.",
    author: "Yoda",
    category: "getshitdone"
  },
  {
    number: "005",
    text: "My best entrepreneural advice is to start.",
    author: "Dave Morin, Path",
    category: "getshitdone"
  }
];

var randomIndex = Math.floor(Math.random() * quotes.length);
var selectedQuote = quotes[randomIndex];

function QuoteController($scope) {
  $scope.quote = selectedQuote;
}