const details = [
  {
    title: "Book organizer",
    content:
      "Using this we can add books with author's name and description.And also we can search, edit and delete the books.",
    responsive: "yes",
    image: "./assets/detailed_images/book-organizer.png",
    thump: "./assets/book-list.png",
    size: "full",
    link: "https://mariraj-krishnan.github.io/Book-Organizer/",
  },
  {
    title: "Draggable to-do",
    content:
      "Simple to-do list with drag and drop feature.You can add a do, and mark a do completed by dragging into the completed box and you can drag it to the trash icon to delete a do.",
    responsive: "Desktop only",
    image: "./assets/detailed_images/draggable-todo.png",
    thump: "./assets/todo_half.png",
    size: "half",
    link: "https://mariraj-krishnan.github.io/Draggable-To-Do/",
  },
  {
    title: "JSON formatter",
    content:
      "Simple JSON formatter that converts the unformatted JSON data into formatted JSON.It includes the features of live file uploading, downloading and live editing.",
    responsive: "yes",
    image: "./assets/json-formatter.png",
    thump: "./assets/json-formatter.png",
    size: "full",
    link: "https://mariraj-krishnan.github.io/JSON-Formatter/",
  },
  {
    title: "Rock paper scissor game",
    content:
      "In this game, if you get the score of 6 before the computer, you will win otherwise you will lose.",
    responsive: "yes",
    image: "./assets/rps.png",
    thump: "./assets/rps.png",
    size: "full",
    link: "https://mariraj-krishnan.github.io/Rock-Paper-Scissor/",
  },
  {
    title: "Lyrics renderer for audio",
    content:
      "In this app, the .mp3 file and the corresponding .lrc file was hot coded you can replace those after downloading the code files.This will generate the time synchronized lyrics for song.",
    responsive: "yes",
    image: "./assets/lyrics_quarter.png",
    thump: "./assets/lyrics_quarter.png",
    size: "quarter",
    link: "https://mariraj-krishnan.github.io/Lyrics-Renderer/",
  },
  {
    title: "Stop watch",
    content:
      "This stop watch has the format of HH:MM:SS.You can pause, resume and stop the time.",
    responsive: "yes",
    image: "./assets/stop-watch_quarter.png",
    thump: "./assets/stop-watch_quarter.png",
    size: "quarter",
    link: "https://mariraj-krishnan.github.io/Stop-Watch/",
  },
  {
    title: "Mobile supported to-do",
    content:
      "This to-do app has some features like add, edit, complete and delete a do.Especially this is supported on mobile browsers.",
    responsive: "yes",
    image: "./assets/to-do_quarter.png",
    thump: "./assets/to-do_quarter.png",
    size: "quarter",
    link: "https://mariraj-krishnan.github.io/To-Do-with-mobile-supported/",
  },
  {
    title: "Master slave tabs",
    content:
      "With this you can create multiple tabs.The newest created tabs will be the master and other older tabs will be the slaves.When you close the master the newest slave tab will be the master.",
    responsive: "yes",
    image: "./assets/master-slave_quarter.png",
    thump: "./assets/master-slave_quarter.png",
    size: "quarter",
    link: "https://mariraj-krishnan.github.io/Master-Slave-Tabs/",
  },
  {
    title: "Image puzzle",
    content:
      "In this image puzzle game you will have one empty cell, you have to arrange the cell to full fill the image.You can view the original image for reference.",
    responsive: "yes",
    image: "./assets/image-puzzle_quarter.png",
    thump: "./assets/image-puzzle_quarter.png",
    size: "quarter",
    link: "https://mariraj-krishnan.github.io/Image-Puzzle/",
  },
  {
    title: "Flames",
    content: "You can do a flames for two names, this will show the result.",
    responsive: "yes",
    image: "./assets/flames_quarter.png",
    thump: "./assets/flames_quarter.png",
    size: "quarter",
    link: "https://mariraj-krishnan.github.io/Flames/",
  },
  {
    title: "Roman <=> decimal",
    content:
      "You can convert roman number to decimal number and vice versa.This will work upto the number 1000.",
    responsive: "yes",
    image: "./assets/detailed_images/roman-to-decimal.png",
    thump: "./assets/roman-decimal_half.png",
    size: "half-alt",
    link: "https://mariraj-krishnan.github.io/Decimal-to-Roman/",
  },
  {
    title: "Wordle clone",
    content:
      "In this app, you have to find a random five letter word.You can see the hint by clicking  the 'Hint' button or you can see the word by double clicking the 'Hint' button.You have to type five alphabets and press the enter button. If the alphabet that you have guessed is present in the word and the position of the word is correct, the guessed word will be highlighted in green. If the alphabet that you have guessed is present in the word but the position of the word is wrong, the guessed alphabet will be highlighted in yellow.If the guessed alphabet is not present in the word, it will not be highlighted either in yellow or green. It will be highlighted in white,",
    responsive: "Desktop only",
    image: "./assets/detailed_images/wordle-clone.png",
    thump: "./assets/wordle-clone_half-alt.png",
    size: "half-alt-2",
    link: "https://mariraj-krishnan.github.io/Wordle-Clone/",
  },
  {
    title: "Random walker",
    content:
      "This app has a viewer and controls you control the walker's speed, control the walker step size, increase or decrease the walker size.And this app has the direction control, you can select any direction among 4 directions, the walker will walk towards the direction by random steps.If the walker touches the edge of the viewer the walker will start another walk from center.",
    responsive: "yes",
    image: "./assets/random-walker-full.png",
    thump: "./assets/random-walker-full.png",
    size: "full",
    link: "https://mariraj-krishnan.github.io/Random-Walker/",
  },
  {
    title: "Image slider",
    content:
      "In this dynamic image slider you can hot code the source of images in the javascript array, this will create an image slider with previous and next buttons.",
    responsive: "yes",
    image: "./assets/detailed_images/image-slider.png",
    thump: "./assets/detailed_images/image-slider.png",
    size: "quarter",
    link: "https://mariraj-krishnan.github.io/Simple-Image-Slider/",
  },
  {
    title: "Tab to tab communication",
    content:
      "You can open two are more tabs with this app.If you add an item in any of the tabs the change will reflect to the other tabs",
    responsive: "yes",
    image: "./assets/tab-tab_quarter.png",
    thump: "./assets/tab-tab_quarter.png",
    size: "quarter",
    link: "https://mariraj-krishnan.github.io/Tab-to-tab-communication/",
  },
  {
    title: "User info getter",
    content:
      "It is good to know about the browsers and screen sizes of the user's devices.So that we can make responsive websites for majority of screen sizes and browsers.",
    responsive: "yes",
    image: "./assets/user-info-full.png",
    thump: "./assets/user-info-full.png",
    size: "full",
    link: "http://browser-info.epizy.com",
  },
  {
    title: "Shapes remembering game",
    content:
      "You can add some number of shapes.The shapes will be  circle, square, oval and rectangle and the color for the shapes will be also be random among red, green and blue.The shapes will br randomly arranged first. Once the timer shows '0', questions will be asked. For example: How many red squares are there?. If you answer correctly, your scores will increase otherwise will remain the same.",
    responsive: "yes",
    image: "./assets/detailed_images/shapes-remember.png",
    thump: "./assets/shapes_half.png",
    size: "half",
    link: "https://mariraj-krishnan.github.io/Shapes-Game/",
  },
  {
    title: "Login form",
    content: "A simple login form using HTML, CSS and little bit of JS.",
    responsive: "yes",
    image: "./assets/login-form_full.png",
    thump: "./assets/login-form_full.png",
    size: "full",
    link: "https://mariraj-krishnan.github.io/Simple-Login-Form/",
  },
];
