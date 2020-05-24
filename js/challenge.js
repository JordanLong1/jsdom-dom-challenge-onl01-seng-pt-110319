//[X] As a user, I should see the timer increment every second once the page has loaded.(setTimeout that increments 1000 milliseconds )
//[X] As a user, I can manually increment and decrement the counter using the plus and minus buttons.(on click decrement by one second on click increment one second)
// [X]As a user, I can 'like' an individual number of the counter. I should see count of the number of 'likes' associated with that number.(display liked number and total likes)
// [X] As a user, I can pause the counter, which should(add functionality to pause the counter)
// [X] disable all buttons except the pause button
// [X] the pause button should then show the text "resume."(add functionality to resume timer )
// [X] When 'resume' is clicked, it should restart the counter and re-enable the buttons.(add event on click timer resumes, buttons are usable again)

// [X] As a user, I can leave comments on my gameplay, such as: "Wow, what a fun game this is."(add comments field )

document.addEventListener("DOMContentLoaded", function() {
    // this event fires when the html on the page is successfully loaded 
        let counter = document.getElementById('counter');
        // defining our counter variable and setting it equal to the element 'counter' so we can manipulate it later

     let theTimer = setInterval(function() {
         // the set interval method calls a function and evaluates an expression at a specified amount of milliseconds 
         // the set interval will keep running until the clear interval method is called
        counter.textContent++;
        // we are taking our counter variable that we declared over and we are using .textContent to take that content and increment
     }, 1000);
     // 1000 is the specified amount of milliseconds so when we increment above we are doing it by one second ( 1000 milliseconds)

     let minusSecond = document.getElementById('minus');
     // grabbing the minus button by the id minus above
     minusSecond.addEventListener('click', function() {
         // adding event listener so when someone clicks, we trigger a callback function
         counter.textContent--;
         // since we want to be able to minus a second off of the counter when the button is clicked 
         // we take the counter variables text content aka the number and decrement by one each click
     });

     let addSecond = document.getElementById('plus');
     // grabbing the plus button on the page by element id 'plus'
     addSecond.addEventListener('click', function() {
         // same thing as above we are adding an event listener for when that button is clicked
         counter.textContent++;
         // taking our counter variable and incrementing the number by one each time we click
     });


     let like = document.getElementById('heart');
     // grabbing the like button by its specified id 
     like.addEventListener('click', function() {
         // adding event listener for each click of the like button
        const likesList = document.createElement('li');
        // creating an li tag
        const showList = document.getElementsByClassName("likes");
        // grabbing the area we want to insert the users input into in this case its "likes"
        let output = likesList.textContent = 'the number ' + counter.textContent + ' has been liked';
        // taking the li (which will be what the user types) and concatinating it with the specified number they want to like and making it into a sentence
            showList[0].appendChild(likesList);
            // taking the parent <ul> </ul> tag and appending the child <li> </li> to it so whatever someone inputs gets outputted into the <ul> </ul>
     });

     const submit = document.getElementById('submit'); //MOVE THIS AT SOME POINT
     // have to grab the submit button in order to disable the feature when we click pause
     let pause = document.getElementById('pause');
     // grabbing the pause button by element id 
     pause.addEventListener('click', function() {
         // event listeneer for ever click
         if (pause.innerText == 'pause') {
             // conditional that if the inner text is equal to pass
            clearInterval(theTimer); // this will pause the timer
            minusSecond.disabled = true; // disables the minus button
            addSecond.disabled = true; // disables the addition button
            like.disabled = true; // disables the like button
            submit.disabled = true; // disables the submit button
            pause.innerText = 'resume'; // changing the inner text to resume when we are paused
            } else if (pause.innerText = 'resume') {
                theTimer = setInterval(function() { // this will resume the timer after clicking resume
                    pause.innerText = 'pause' // change the text on the box back to pause 
                    minusSecond.disabled = false; // enabling minus button
                    addSecond.disabled = false; // enabling addition button
                    like.disabled = false; // enabling like button
                    submit.disabled = false; // enabling submit button
                    counter.textContent++; // taking our counter variable and incrementing after hitting resume
            }, 1000); // once again doing so by one second
        }

        
        let userInput = document.getElementById('comment-input'); // grabbing the input box where the user types in their comment
        
        submit.addEventListener('click', function(event) {
            event.preventDefault(); // upon hitting submit, by defualt javascript will try to send the data somewhere.. prevent default prevents that and lets you choose where to send the data
            let listComments = document.getElementById('list'); // grabbing the area where we will be inserting the data
           let comments = document.createElement("P"); // creating a p tag to take what the user chose to input 

              console.log(userInput.value);
           comments.textContent = userInput.value; // taking the users inputs text content and assigning it to the value of what was typed in the comment box

           
           listComments.appendChild(comments); // taking the <ul> element </ul> and appending the p tag to it 
           userInput.value = "";
        
        });

     });

});



