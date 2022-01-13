$(document).ready(function() {
  // $('#btn-2').on('click', function() {
  //   window.open('http://www.google.com');
  // })  
  
  // $('#btn-1').on('click', function() {
  //   window.alert('clicked on button 1');
  // })
  // let counter = 0;
  // const addNewBtn =  $('#addNewBtn');
  // addNewBtn.on('click', function() {
  //   const newButton = $('<button>');
  //   newButton.text('This is button ' + (counter + 1));
  //   counter++;
  //   $('body').append(newButton);
  // })

  // $('#menu').menu();

  // $('#sectionalAccordion').accordion();

  // $('ul li').on('click', function() {
  //   const allLiElms = $('ul li');
  //   for (let index = 0; index < allLiElms.length; index++) {
  //     const element = allLiElms[index];
  //     $(element).css('background-color', '');
  //     $(element).find('a').css('color', '');
  //   }
  //   const curLi = $(this);
  //   curLi.css({'background-color':'green', 'border-top-left-radius':'10px', 'border-top-right-radius':'10px'});
  //   curLi.find('a').css('color', '#fff');

  //   // here
  //   // 2. adding the css properties to the current li element
  //   // 1. removing the css properties from all li elements
  // });

  // $.ajax({
  //   url: 'https://jsonplaceholder.typicode.com/todos'
  // }).done(function(data){
  //   console.log(data);
  //   for (let index = 0; index < data.length; index++) {
  //     const ul = $('<ul>');
  //     const element = data[index];
  //     const newLiUserId = $('<li>');
  //     const newAUserId = $('<a>');
  //     newAUserId.text(`User ID : ${element.userId}`);

  //     newLiUserId.append(newAUserId);

  //     const newLiTitle = $('<li>');
  //     const newATitle = $('<a>');
  //     newATitle.text(`Title : ${element.title}`);

  //     newLiTitle.append(newATitle);
  //     if (element.completed) {
  //       newLiTitle.css('text-decoration', 'line-through');
  //     }

  //     const newLiId = $('<li>');
  //     const newAId = $('<a>');
  //     newAId.text(`ID : ${element.id}`);

  //     newLiId.append(newAId);

  //     const newLiCompleted = $('<li>');
  //     const newACompleted = $('<input />', { type: 'checkbox', checked: element.completed, value: Boolean(element.completed) });
  //     newACompleted.on('click', function() {
  //       const curCheckbox = $(this);
  //       const curLi = curCheckbox.parent();
  //       if (curCheckbox.is(':checked')) {
  //         curLi.css('text-decoration', 'line-through');
  //       } else {
  //         curLi.css('text-decoration', '');
  //       }
  //     });
  //     newLiCompleted.append(newACompleted);

  //     ul.append(newLiUserId);
  //     ul.append(newLiTitle);
  //     ul.append(newLiId);
  //     ul.append(newLiCompleted);
  //     $('body').append(ul);

  //   }
  // })

  // $.ajax({
  //   url: 'https://jsonplaceholder.typicode.com/posts',
  //   method: 'POST',
  //   data: {
  //     title: 'foo',
  //     body: 'bar',
  //     userId: 1
  //   }
  // }).done(function(){
  //   console.log('Sent');
  // });


  /**
   * lists all posts with its comments
   * 
   * 1. get all posts
   * 2. get all comments for above all posts
   * 3. map all the comments to the posts by id
   * 
   *  ex: {
   *      postId: 1
   *      postName: 'This is some post 1',
   *      postOwner: 'John Doe',
   *      comments: [ 
   *        {id: 1, personName: 'A', commentName: 'this is a comment from A person' postId: 1},
   *        {id: 2, personName: 'B', commentName: 'this is a comment from B person' postId: 1}
   *        {id: 3, personName: 'C', commentName: 'this is a comment from C person' postId: 1}]
   *      }
   */

//   let posts = [];
//   let comments = [];

//   let postsInfoWithComments = [];

//   $.ajax({
//     url: 'https://jsonplaceholder.typicode.com/posts',
//     method: 'GET'
//   }).done(successCallbackForPosts);

//   $.ajax({
//     url: 'https://jsonplaceholder.typicode.com/comments',
//     method: 'GET'
//   }).done(successCallbackForComments);

//   function successCallbackForPosts(data) {
//     posts = data;
//     console.log(posts);
//   }
//   function successCallbackForComments(data) {
//     comments = data;
//     console.log(comments);
//     for (let index = 0; index < posts.length; index++) {
//       const postInfo = posts[index];
   
//       const postId = postInfo.id;
   
//       const allComments =  getAllCommentsForPostById(postId);
//       postsInfoWithComments.push({
//         postId: postId,
//         postName: postInfo.title,
//         postOwner: postInfo.userId,
//         comments: allComments
//       })
//     }
   
//     console.log(postsInfoWithComments);

//     renderAllPostsWithComments(postsInfoWithComments);

//   }

//  function getAllCommentsForPostById(postId){
//   return comments.filter( eachComment => eachComment.postId === postId);
//  }


//  function  renderAllPostsWithComments(data){
//   for (let index = 0; index < data.length; index++) {
//       const ul = $('<ul>');

//       const element = data[index];
//       const newLiUserId = $('<li>');
//       const newAUserId = $('<a>');
//       newAUserId.text(`Post ID : ${element.postId}`);
//       newLiUserId.append(newAUserId);

//       const newLiTitle = $('<li>');
//       const newATitle = $('<a>');
//       newATitle.text(`Post Name : ${element.postName}`);
//       newLiTitle.append(newATitle);
      

//       $(ul).on('click', function() {
//         // we need to find current UL element that is clicked(===> index in the posts array)
//         // use that index to retrieve the comments array
//       });

//       ul.append(newLiUserId);
//       ul.append(newLiTitle);
      
//       $('body').append(ul);

//   }

//  }

let postsInformation = [];

function renderPostCards(data){
  for (let index = 0; index < data.length; index++) {
    const post = data[index];

    const h5 = $('<h5>');
    h5.text(post.title);
    h5.addClass('card-title');

    const p = $('<p>');
    p.text(post.body);
    p.addClass('card-text');

    const div = $('<div>');
    div.addClass('card-body text-primary');
    div.append(h5);
    div.append(p);

    const card = $('<div>');
    card.addClass('card border-primary mb-3');
    card.css('max-width', '18rem');

    const header = $('<div>');
    header.addClass('card-header');
    header.text(`Post ID : ${post.id}`);
    card.append(header);
    card.append(div);

    $('.container').append(card);
  }
}

function getPosts() {
  $.ajax({
    url: 'https://jsonplaceholder.typicode.com/posts',
    method: 'GET'
  }).done(successCallbackForPosts);

  function successCallbackForPosts(data) {
    $('.searchContainer').show();
    postsInformation = data.map(eachPost => {
      return eachPost;
    });
    $('.progress').hide();

    renderPostCards(postsInformation);
  }
}


  $('#searchText').on('keyup', function() {

    $('.container').empty(); // remove all the cards first
    const searchValue = $(this).val();
    const filteredPosts = postsInformation.filter(eachPost => {
      return (eachPost.title.includes(searchValue) 
          || eachPost.body.includes(searchValue)) || 
          (eachPost.id.toString().includes(searchValue)
      );
    });
    
    renderPostCards(filteredPosts);
  })

  $('.searchContainer').hide();

let initialWidth = 0;
setInterval(() => {
  const pgbar = $('.progress-bar');
  initialWidth += 1;
  pgbar.css('width', initialWidth+'%');

  if(initialWidth === 100){
    getPosts();
  }
}, 100);


});// end of document.ready
