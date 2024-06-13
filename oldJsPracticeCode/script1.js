document.getElementById('comment-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission

  // Get input values
  var name = document.getElementById('name').value;
  var comment = document.getElementById('comment').value;

  // Create a new comment element
  var newComment = document.createElement('div');
  newComment.innerHTML = '<h3>' + name + '</h3><p>' + comment + '</p>';

  // Add the new comment to the comments container
  var commentsContainer = document.getElementById('comments');
  commentsContainer.appendChild(newComment);

  // Clear the input fields
  document.getElementById('name').value = '';
  document.getElementById('comment').value = '';
});
